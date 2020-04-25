<?php

namespace App\Service;

use Doctrine\DBAL\DBALException;
use Doctrine\ORM\EntityManagerInterface;

class StudentService
{
    /**
     * @var EntityManagerInterface
     */
    private $entityManager;

    /**
     * StudentService constructor.
     * @param EntityManagerInterface $entity_manager
     */
    public function __construct(EntityManagerInterface $entity_manager)
    {
        $this->entityManager = $entity_manager;
    }

    /**
     * @param array $students
     * @return array|null
     * @throws DBALException
     */
    public function getInfo(array $students): ?array
    {
        if (empty($students)) {
            return null;
        }

        $students_data = [];
        foreach ($students as $key => $student) {
            $student_id = $student->getId();
            $student = $this->getStudent($student_id);
            $grades = $this->getGrades($student_id);

            $students_data[] = ['student_info' => $student, 'grades' => $grades];
        }

        return $students_data;
    }

    /**
     * @param int $student_id
     * @return array
     * @throws DBALException
     */
    public function getStudent(int $student_id): array
    {
        $em = $this->entityManager;
        $RAW_QUERY = 'SELECT student.first_name, student.last_name, university.name
                        FROM student 
                        LEFT JOIN university ON student.university_id = university.id
                        WHERE student.id = ' . $student_id . ' ';

        $statement = $em->getConnection()->prepare($RAW_QUERY);
        $statement->execute();

        return $statement->fetch();
    }

    /**
     * @param int $student_id
     * @return array
     * @throws DBALException
     */
    public function getGrades(int $student_id): array
    {
        $em = $this->entityManager;
        $RAW_QUERY = 'SELECT AVG(mark.mark), subject.name, subject.code  
                        FROM mark 
                        LEFT JOIN subject ON mark.subject_id = subject.id 
                        WHERE mark.student_id = ' . $student_id . ' 
                        GROUP BY subject.name, subject.code';

        $statement = $em->getConnection()->prepare($RAW_QUERY);
        $statement->execute();

        $grade_data = $statement->fetchAll();
        $grades = [];
        foreach ($grade_data as $key => $data) {
            $grades[$data['code']] = ['name' => $data['name'], 'avg_grade' => number_format($data['AVG(mark.mark)'], 1)];
        }

        return $grades;
    }
}