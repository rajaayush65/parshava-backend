1) Run "npm install"

2) Create a cluster on MongoDB Atlas

3) Create a .env file in root directory , you can use admin/admin for the username and password, in case you don't want to create new Cluster on mongodb, this is just for documentation and educational purpose. Kindly don't misue the resources free of cost by MongoDB.

        Add Below ENV Files (Add the username and password from mongodb atlas in below URL)

        MONGO_DB_URL="mongodb+srv://<username>:<password>@docketdbarea.3ynmwvz.mongodb.net/docketDb?retryWrites=true&w=majority"
        PORT=4000

4) run "npm start"

Routes:
1) [POST]Process CSV - http://localhost:4000/api/docket/processCsv
   ![image](https://github.com/rajaayush65/parshava-backend/assets/63776877/8409a3dc-ca20-48d7-a402-1d13e4cebc6c)


3) [GET]Unique Suppliers - http://localhost:4000/api/supplier/getUniqueSuppliers

   ![image](https://github.com/rajaayush65/parshava-backend/assets/63776877/388f0422-a64f-4643-a836-dcafe317a6c1)


4) [POST]Get PONumber and Description - http://localhost:4000/api/supplier/getpoorders


    Send below payload in body as json
            {
                "supplierName": "supplier name"
            }
   
   ![image](https://github.com/rajaayush65/parshava-backend/assets/63776877/a5b63af1-8d2a-4aca-b142-ac35e809e40a)


6) [GET]http://localhost:4000/api/docket/getorders

        ![image](https://github.com/rajaayush65/parshava-backend/assets/63776877/f01cb35f-1f7c-4cac-9e3d-5ee4dac9023d)

7) [POST]http://localhost:4000/api/docket/createorder

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

   ![image](https://github.com/rajaayush65/parshava-backend/assets/63776877/4f81942c-3aee-4e2f-9e4c-e95129a4fdbb)


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
