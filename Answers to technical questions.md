# Technical questions

1. **If you had plenty of time and resources, what would you add to the coding test you implemented?**

    I would add integration tests.

1. **How would you track down a performance issue in production? Have you ever had to do this?**

    Yes, I had. I usually see the logs of the platform on which the system is running; the database in order to identify some slow query; the communication with external resources and I/O operations that may be consuming a lot of memory.

1. **Please describe yourself and your technical skills using JSON.**
    ```
    {
    "first_name" : "Nayra",
    "last_name" : "Oliveira",
    "nationality" : "Brazilian"
    "age" : "26",
    "address" : {
        "state" : "Piauí",
        "city" : "Parnaíba"
    },
    "skills" : [
        "java",
        "linux",
        "Relational Database"
    ]
    }
    ```

1. **How do you test your backend? Feel free to comment on your preferred approaches and frameworks.**
    
    Usually I try to develop my unit tests using TDD when I can.
    In this project I used Jest because according with my study is a complete tool and provide a simple syntax.
    Generally in Java projects I use Junit and Mockito to coding my unit tests, 

1. **In which of the following use cases Node would be optimal? In which don't?**
   
    * Node should be used:
    
        * A realtime chat app backend.
        * IoT device app that reads data from a sensor and sends it to a central repository.
        * Serverless function fired by an image upload event to generate thumbnails.
        * A single page application (SPA).   

    * Node shouldn't be used:

        * A bitcoin mining app.
        * Parsing and importing a long and complex file     format into a relational database.
        * Machine learning object detection.