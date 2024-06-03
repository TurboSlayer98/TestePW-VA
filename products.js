const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAll = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching products' });
  }
};

exports.getById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await prisma.product.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!product) {
      res.status(404).json({ error: `Product with ID ${id} not found` });
      return;
    }

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the product' });
  }
};

exports.create = async (req, res) => {
  const { name, description, price, category } = req.body;

  try {
    const product = await prisma.product.create({
      data: {
        name,
        description,
        price,
        category,
      },
    });

    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the product' });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, category } = req.body;

  try {
    const updatedProduct = await prisma.product.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
        description,
        price,
        category,
      },
    });

    if (!updatedProduct) {
      res.status(404).json({ error: `Product with ID ${id} not found` });
      return;
    }

    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the product' });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await prisma.product.delete({
      where: {
        id: parseInt(id),
      },
    });

    if (!deletedProduct) {
      res.status(404).json({ error: `Product with ID ${id} not found` });
      return;
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting the product' });
  }
};
