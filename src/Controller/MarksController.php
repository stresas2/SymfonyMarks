<?php

namespace App\Controller;

use App\Entity\Student;
use App\Service\StudentService;
use Doctrine\DBAL\DBALException;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MarksController
{
    /**
     * @var EntityManagerInterface
     */
    private $entityManager;

    /**
     * @var StudentService
     */
    private $studentService;

    /**
     * MarksController constructor.
     * @param EntityManagerInterface $entity_manager
     * @param StudentService $student_service
     */
    public function __construct(EntityManagerInterface $entity_manager, StudentService $student_service)
    {
        $this->entityManager = $entity_manager;
        $this->studentService = $student_service;
    }

    /**
     * @return JsonResponse
     * @throws DBALException
     * @Route("/grades", name="grades", methods={"GET"})
     */
    public function get(): JsonResponse
    {
        $students = $this->entityManager->getRepository(Student::class)->findAll();
        $data = $this->studentService->getInfo($students);

        return new JsonResponse($data, Response::HTTP_OK);
    }
}