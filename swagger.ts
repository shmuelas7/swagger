 const swaggerDocument = {
    
        "swagger": "2.0",
        "info": {
            "description": "This is my first Swagger Documentation",
            "version": "1.0.0",
            "title": "Tasks API",
            "contact": {
                "email": "shmuelas7@gmail.com"
            },

        },
        "schemes": ["http"],
        "host": "localhost:3080",
        "basePath": "/api",
        "paths" : {
            "" : {
                "get" : {
                    "summary" : "Get HTML file ",
                    "description": "Get main page",
                    "responses": {
                        "200": {
                            "description": "successful operation",
                        },
                        "400": {
                            "description": "not found file: index.html",
                        }
                    }
                }
            },
            "/" : {
                "post" : {
                    "summary" : "get the number and calculate",
                    "description": "calculate them",
                    "parameters": [
                        {
                            "in": "body",
                            "name": "num1",
                            "description": "first number",
                            "required": true,
                            "type": "integer",
                            "schema":{
                                "type": "integer",
                            }
                            },
                            {
                                "in": "body",
                                "name": "num2",
                                "description": "secend number",
                                "required": true,
                                "type": "integer",
                                "schema": {
                                    "type": "integer",
                                }
                            }
                        
                    ],
                    "responses": {
                        "200": {
                            "description": "successful operation",
                            "schema": {
                                "type": "integer",
                            }
                        },
                        "400": {
                            "description": "Invalid status value",
                        }
                    }
                }
            },
 
        }, 

    }


module.exports = swaggerDocument