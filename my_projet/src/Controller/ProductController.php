<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

class ProductController extends AbstractController
{
    private array $products = [
      ['id' =>1, 'name' => 'Laptop', 'description'=>'Laptop' ,'price' => 100],
      ['id' =>2, 'name' => 'Book', 'description'=>'Book' ,'price' => 10],
      ['id' =>3, 'name' => 'Phone', 'description'=>'Phone' ,'price' => 200],
      ['id' =>4, 'name' => 'Webcam', 'description'=>'webcam' ,'price' => 20]
    ];

    #[Route('/products', name: 'get_products_list', methods: ['GET'])]
    public  function getProducts(): JsonResponse
    {

        return $this->json($this->products);

    }

    #[Route('/products/{id}', name: 'get_product', methods: ['GET'])]
    public function getProduct(int $id): JsonResponse
    {


        return $this->json($this->products[$id]);
    }
}
{

}