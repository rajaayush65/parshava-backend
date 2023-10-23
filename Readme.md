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

Scope Coverage in backend - 

1) Went with industry standards of writing code
2) New orders can be created from the frontend
3) Dockets information can be viewed in frontend once, the process of csv file is done(first step)
4) Unique suppliers and unique PO numbers with description can be shown
5) all blank fields are filled with data, as per the requirement and as explained in video, however using SQL DBs are more better, as we can create relations for data mapping
6) New Order Data getting saved in DB

Technologies used - 
1) Express
2) CsvParser


Improvements - 

1) More Clarity on requirements, that what needs to be done
2) processing csv can be optmized, once exact requirement are clear