# Comenzi MongoDB

## General

```javascript
db // show current db
use dbNAME // use (set) the db named: dbName
ds.dbName.stats // info/statistics about dbName
cls // clear console
```

## Create

```javascript
db.coll.insertOne({ name: "Max" });
db.coll.insertMany([{ name: "Max", age: 50 }, { name: "Alex" }]);
db.coll.insertOne({ date: ISODate() });
```

## Read

```javascript
db.coll.find(); // returns a cursor (all db): the colection (all documents, aka all results)

db.coll.find({ size: 50 }); // return all documents that have the property: size 50
db.coll.findOne(); // returns the first document it finds with the property: size 50

db.coll.find({ name: "Max", age: 32 }); // return all documents with this two properties
db.coll.find({ date: ISODate("2020-09-25T13:57:17.180Z") });

db.coll.distinct("name"); // for all documents with property (key): name, return an array with all values

//Proiection => return not all doc. properties, just a specific part.
db.coll.find({ size: 50 }, { name: 0 }); // =>: all docs that have size = 50, with all props, but without: name
db.coll.find({ size: 50 }, { name: 1 }); // =>: all docs that have size = 50, with just prop: name, without the rest

// Get array properties
db.coll.find({ characteristics: "large" }); // => all docs with property= characteristics: ["red", "large", etc]

// Get object properties (nested)
db.coll.find({ "owner.name": "John" }); // => all docs with property= owner: {name: "John", age ="50", etc}

// Comparison
db.coll.find({ age: { $ne: 18 } }); // not equals:=> return all doc. with property age !== 18 (*and doc. without it)

db.coll.find({ age: { $eq: 18 } }); // equals:=> return all doc. with age = 18
db.coll.find({ age: { $gt: 18 } }); // greater than:=> return all doc. with age > 18
db.coll.find({ age: { $lt: 18 } }); // less than:=> return all doc. with age < 18

db.coll.find({ age: { $gte: 18 } }); // greater than and equal:=> return all doc. with age >= 18
db.coll.find({ age: { $lte: 18 } }); // less than and equal:=> return all doc. with age <= 18

// Logical
db.coll.find({ name: { $not: { $eq: "Max" } } }); // => all docs that doesn't have prop= name: "Max"

db.coll.find({ $or: [{ age: 10 }, { age: 20 }] }); // all docs that have property= year: 10 || 20
db.coll.find({ $or: [{ age: 10 }, { color: "blue" }] }); // all docs that have property= year: 10 || color: "blue"

db.coll.find({ $or: [{ year: 1958 }, { color: "blue" }] }); // all docs that have both properties

// Element
db.coll.find({ name: { $exists: true } }); // => all docs in which exists property= name
db.coll.find({ zipCode: { $type: "string" } }); // => all docs in which zipCod property is a number

// Regex
db.coll.find({ name: /^Max/ }); // regex: starts by letter "M"
db.coll.find({ name: /^Max$/i }); // regex case insensitive
db.coll.find({ name: { $regex: "L" } }); // all docs that have property= name: Luize, Lego, etc

// Sort, skip, limit => pagination
db.coll.find({}).sort({ age: 1 }); // => sort all docs. in ordine crescatoare (sau alfabetic)
db.coll.find({}).sort({ age: -1 }); // => sort all docs. in ordine descrescatoare (invers alfabetic)

db.coll.find().limit(3); // => return just first 3 docs.
db.coll.find().skip(10); // => jumps (ignores) first 10 docs.
db.coll.find({}).sort({ year: 1 }).skip(40).limit(10); // => pagination: page = 5 (skip first 4 pages); perPage = 10

// Count
db.coll.countDocuments(); // return the numers of all doc. (how many are)
db.coll.countDocuments({ age: 32 }); // return the numers of doc. with that property
```

## Update

```javascript
db.coll.updateOne({ _id: 1 }, { $set: { name: "name x" } }); // update (or add) name property
db.coll.updateOne({ _id: 1 }, { $unset: { name: "name" } }); // delete that property
db.coll.updateOne({ _id: 1 }, { $rename: { name: "fistName" } }); // rename that property
db.coll.updateOne({ _id: 1 }, { $inc: { year: 5 } }); // increment the property year, with 5 (id add plus 5)
db.coll.updateOne({ _id: 1 }, { $min: { imdb: 5 } }); // increment with 5, if the property is less than that
db.coll.updateOne({ _id: 1 }, { $max: { imdb: 8 } }); // increment with 5, if the property is greater than that
db.coll.updateOne({ _id: 1 }, { $currentDate: { lastModified: true } }); // set the value of proerty= current time

// Array
db.coll.updateOne({ _id: 1 }, { $push: { color: "red" } }); // for array color, adds the element: red
db.coll.updateOne({ _id: 1 }, { $addToSet: { color: "red" } }); // if doesn't exist, adds the element: red

db.coll.updateOne({ _id: 1 }, { $pull: { color: "red" } }); // for array color, remove the element: red

db.coll.updateOne({ _id: 1 }, { $pop: { color: 1 } }); // for array color, remove last element
db.coll.updateOne({ _id: 1 }, { $pop: { color: -1 } }); // for array color, remove first element

db.coll.updateOne({ _id: 1 }, { $pullAll: { color: ["red", "black", "etc"] } });

db.coll.updateOne({ _id: 1 }, { $push: { scores: { $each: [90, 92] } } });
db.coll.updateOne(
  { _id: 2 },
  { $push: { scores: { $each: [40, 60], $sort: 1 } } }
); // array sorted

// FindOneAndUpdate
db.coll.findOneAndUpdate(
  { name: "Max" },
  { $inc: { points: 5 } },
  { returnNewDocument: true }
);

// Upsert
db.coll.updateOne(
  { _id: 1 },
  { $set: { item: "apple" }, $setOnInsert: { defaultQty: 100 } },
  { upsert: true }
);

// Replace
db.coll.replaceOne(
  { name: "Max" },
  { firstname: "Maxime", surname: "Beugnet" }
);

// Write concern
db.coll.updateMany(
  {},
  { $set: { x: 1 } },
  { writeConcern: { w: "majority", wtimeout: 5000 } }
);
```

## Delete

```javascript
db.coll.deleteOne({ name: "Max" }); // => delete the first doc. with that property
db.coll.deleteMany({ name: "Max" }); // => delete all the docs with that property
db.coll.deleteMany({}); // WARNING! Deletes all the docs but not the collection itself and its index definitions
db.coll.findOneAndDelete({ name: "Max" });
```
