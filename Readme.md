1) Run "npm install"

2) Create a cluster on MongoDB Atlas

3) Create a .env file in root directory

        Add Below ENV Files (Add the username and password from mongodb atlas in below URL)

        MONGO_DB_URL="mongodb+srv://<username>:<password>@docketdbarea.3ynmwvz.mongodb.net/docketDb?retryWrites=true&w=majority"
        PORT=4000

4) run "npm start"

Routes:
1) Process CSV - http://localhost:4000/api/docket/processCsv

2) Unique Suppliers - http://localhost:4000/api/supplier/getUniqueSuppliers

3) Get PONumber and Description - http://localhost:4000/api/supplier/getpoorders


    Send below payload in body as json
            {
                "supplierName": "supplier name"
            }

4) http://localhost:4000/api/docket/getorders

5) http://localhost:4000/api/docket/createorder

    Send below payload in body as json

    {
    "name": "John Doe",
    "startDate": "2023-10-01",
    "endDate": "2023-10-15",
    "hoursWorked": 80,
    "ratePerHour": 25.50,
    "supplierName": "ABC Supplies",
    "purchaseOrder": "PO12345"
    }

