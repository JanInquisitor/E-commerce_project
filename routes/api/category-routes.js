const router = require('express').Router();
// const {sequelize} = require('sequelize')
const {Category, Product} = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
    try {
        // find all categories
        // be sure to include its associated Products
        let categories = await Category.findAll({
            include: [{model: Product}]
        })

        res.status(201).json({
            status: "success",
            data: {
                categories,
            },
        });

    } catch (error) {
        res.status(404).json({message: 'There are not any categories.'})
    }
});

router.get('/:id', async (req, res) => {
    try {
        // find one category by its `id` value
        // be sure to include its associated Products
        let category = await Category.findByPk(req.params.id, {
            include: [{model: Product}]
        })
        res.status(201).json({
            status: 'success',
            data: {
                category
            }
        })

    } catch (error) {
        res.status(400).json({message: 'Category not found.'})
    }
});

router.post('/', async (req, res) => {
    try {
        // create a new category
        let category = await Category.create({
            category_name: req.body.name
        })

        res.status(201).json({
            status: "success",
            category
        });

    } catch (error) {
        res.status(400).json({message: 'Could not create category.'})
    }

});

router.put('/:id', async (req, res) => {
    try {
        let updatedCategory = Category.update({category_name: req.body.name}, {
            where: {
                id: req.params.id
            }
        })
        // const result = await Category.query(`UPDATE category
        //                                      SET category_name = ${req.body.name}
        //                                      WHERE id = ${req.params.id}`)

        res.status(201).json({
            status: "Success",
            // updatedCategory
        })
    } catch (error) {
        res.status(400).json({message: 'Could not update category.', error})

    }
});

router.delete('/:id', async (req, res) => {
    try {
        Category.destroy({
            where: {
                id: req.params.id,
            }
        })

        res.status(200).json({message: 'Category deleted!'})
    } catch (error) {
        res.status(400).json({message: 'There was an error deleting the category.'})
    }
});

module.exports = router;
