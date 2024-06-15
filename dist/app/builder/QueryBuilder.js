"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryBuilder = void 0;
class QueryBuilder {
    constructor(modelQuery, query) {
        this.modelQuery = modelQuery;
        this.query = query;
    }
    /**
     * The `search` function in TypeScript constructs a query based on specified criteria such as date
     * and service ID.
     * @returns The `search()` method is returning the current instance of the object it is being called
     * on (likely a class instance) to allow for method chaining.
     */
    search() {
        const searchCriteria = [];
        /* The code snippet `if (this.query.date) { searchCriteria.push({ date: this.query.date } as
    FilterQuery<T>); }` is checking if there is a `date` property present in the `query` object. If the
    `date` property exists, it creates a filter criteria object `{ date: this.query.date }` and pushes
    it into the `searchCriteria` array as a `FilterQuery<T>` type. This is part of constructing a search
    query based on the specified criteria such as date and service ID in the `search()` method of the
    `QueryBuilder` class. */
        if (this.query.date) {
            searchCriteria.push({ date: this.query.date });
        }
        /* The code snippet `if (this.query.serviceId) { searchCriteria.push({ service: this.query.serviceId
       } as FilterQuery<T>); }` is checking if there is a `serviceId` property present in the `query`
       object. If the `serviceId` property exists, it creates a filter criteria object `{ service:
       this.query.serviceId }` and pushes it into the `searchCriteria` array as a `FilterQuery<T>` type.
       This is part of constructing a search query based on the specified criteria such as service ID in
       the `search()` method of the `QueryBuilder` class. */
        if (this.query.serviceId) {
            searchCriteria.push({ service: this.query.serviceId });
        }
        /* This code snippet is checking if there are any search criteria present in the `searchCriteria`
    array. If the length of `searchCriteria` is greater than 0, it means that there are search criteria
    to be applied. In that case, it constructs a MongoDB query using the `find()` method on
    `this.modelQuery` with an `` operator to combine multiple filter criteria specified in the
    `searchCriteria` array. This allows for applying multiple search criteria simultaneously in the
    MongoDB query. */
        if (searchCriteria.length > 0) {
            this.modelQuery = this.modelQuery.find({
                $and: searchCriteria,
            });
        }
        return this;
    }
    filter() {
        const queryObj = Object.assign({}, this.query);
        const excludeFields = [
            "date",
            "serviceId",
            "limit",
            "page",
            "fields",
            "sort",
        ];
        excludeFields.forEach((el) => delete queryObj[el]);
        this.modelQuery = this.modelQuery.find(queryObj);
        // console.log("Model query after filter:", this.modelQuery);
        return this;
    }
    sort() {
        if (this.query.sort) {
            const sort = this.query.sort || "-createdAt";
            this.modelQuery = this.modelQuery.sort(sort);
        }
        // console.log("Model query after sort:", this.modelQuery);
        return this;
    }
    paginate() {
        const page = Number(this.query.page) || 1;
        const limit = Number(this.query.limit) || 10;
        const skip = (page - 1) * limit;
        this.modelQuery = this.modelQuery.skip(skip).limit(limit);
        // console.log("Model query after paginate:", this.modelQuery);
        return this;
    }
    fields() {
        if (this.query.fields) {
            const fields = this.query.fields.split(",").join(" ");
            this.modelQuery = this.modelQuery.select(fields);
        }
        // console.log("Model query after fields:", this.modelQuery);
        return this;
    }
}
exports.QueryBuilder = QueryBuilder;
