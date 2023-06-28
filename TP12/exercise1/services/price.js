const Prices = require("../models/prices");

const findAll = async () => {
  // to do
  try {
    const prices = await Prices.find()
    return {
      success : true,
      data : prices
    }
  } catch (error) {
    return {
      success : false,
      error : error.message
    }
  }
}

const create = async (newPrice) => {
  // to do
  try {
    const createdPrice = await Prices.create(newPrice);
    // return createdPrice;
    return {
      success: true,
      data: createdPrice
    }
  } catch (error) {
    return {
      success: false,
      error: error.message
    }
  }
}

const findById = async (id) => {
  // to do
  try {
    const price = await Prices.findById(id);
    return{
      success: true,
      data: price
    }
  } catch (error) {
    return {
      success : false,
      err : error.message
    }
  }
}

const update = async (id, newPrice) => {
  // to doF
  try {
    const price = await Prices.findById(id)
    price.price = newPrice.price
    price.source = newPrice.source
    price.product = newPrice.product
    await price.save()
    return{
      success: true,
      data: price
    }
  } catch (error) {
    return{
      success : false,
      err : error.message
    }
  }
}

const remove = async (id) => {
  // to doF
  try {
    await Prices.findByIdAndDelete(id)
    return {
      success : true,
      data : "Price deleted"
    }
  } catch (error) {
    return {
      success : false,
      err : error.message
    }
  }
}


module.exports = {
  findAll,
  create,
  findById,
  update,
  remove
}