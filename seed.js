const mongoose = require('mongoose');
const Blog = require('./models/blog')

const blogs=[
    {
        name:"Oneplus 7t",
        img:"https://images.unsplash.com/photo-1576832698390-b3d9ca06b860?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        desc:"OnePlus built its brand image around “flagship killers”, promising nearly all the features and capabilities of flagship-class phones at half the price or less. These days, flagships are routinely launched at prices north of Rs. 1,00,000, and OnePlus has kept pace. The new OnePlus 9 and 9 Pro were just introduced with starting prices of Rs. 49,999 and Rs. 64,999 respectively, putting them well and truly into the premium tier. Unfortunately, for many people, purchasing power has not risen quite as much. The kind of buyer who felt like they were getting a great deal when, say, the OnePlus 5 launched at Rs. 32,999 in mid-2017, is unlikely to feel the same way about the current generation when it's time to upgrade."
    },
    {
        name:"Oneplus 8t",
        img:"https://images.unsplash.com/photo-1576832698390-b3d9ca06b860?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        desc:"OnePlus built its brand image around “flagship killers”, promising nearly all the features and capabilities of flagship-class phones at half the price or less. These days, flagships are routinely launched at prices north of Rs. 1,00,000, and OnePlus has kept pace. The new OnePlus 9 and 9 Pro were just introduced with starting prices of Rs. 49,999 and Rs. 64,999 respectively, putting them well and truly into the premium tier. Unfortunately, for many people, purchasing power has not risen quite as much. The kind of buyer who felt like they were getting a great deal when, say, the OnePlus 5 launched at Rs. 32,999 in mid-2017, is unlikely to feel the same way about the current generation when it's time to upgrade."
    },
    {
        name:"Oneplus 9t",
        img:"https://images.unsplash.com/photo-1576832698390-b3d9ca06b860?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        desc:"OnePlus built its brand image around “flagship killers”, promising nearly all the features and capabilities of flagship-class phones at half the price or less. These days, flagships are routinely launched at prices north of Rs. 1,00,000, and OnePlus has kept pace. The new OnePlus 9 and 9 Pro were just introduced with starting prices of Rs. 49,999 and Rs. 64,999 respectively, putting them well and truly into the premium tier. Unfortunately, for many people, purchasing power has not risen quite as much. The kind of buyer who felt like they were getting a great deal when, say, the OnePlus 5 launched at Rs. 32,999 in mid-2017, is unlikely to feel the same way about the current generation when it's time to upgrade."
    },
    {
        name:"Oneplus 9t pro",
        img:"https://images.unsplash.com/photo-1576832698390-b3d9ca06b860?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        desc:"OnePlus built its brand image around “flagship killers”, promising nearly all the features and capabilities of flagship-class phones at half the price or less. These days, flagships are routinely launched at prices north of Rs. 1,00,000, and OnePlus has kept pace. The new OnePlus 9 and 9 Pro were just introduced with starting prices of Rs. 49,999 and Rs. 64,999 respectively, putting them well and truly into the premium tier. Unfortunately, for many people, purchasing power has not risen quite as much. The kind of buyer who felt like they were getting a great deal when, say, the OnePlus 5 launched at Rs. 32,999 in mid-2017, is unlikely to feel the same way about the current generation when it's time to upgrade."
    },
    {
        name:"Oneplus 6t",
        img:"https://images.unsplash.com/photo-1592726664819-98c3e9f8b10c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        desc:"OnePlus built its brand image around “flagship killers”, promising nearly all the features and capabilities of flagship-class phones at half the price or less. These days, flagships are routinely launched at prices north of Rs. 1,00,000, and OnePlus has kept pace. The new OnePlus 9 and 9 Pro were just introduced with starting prices of Rs. 49,999 and Rs. 64,999 respectively, putting them well and truly into the premium tier. Unfortunately, for many people, purchasing power has not risen quite as much. The kind of buyer who felt like they were getting a great deal when, say, the OnePlus 5 launched at Rs. 32,999 in mid-2017, is unlikely to feel the same way about the current generation when it's time to upgrade."
    }
]
  const seedDB = async ()=>{
    await  Blog.insertMany(blogs);
    console.log("Db Insert");
  }

  module.exports = seedDB;