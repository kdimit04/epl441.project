# epl441.project
Team:Restful Services
The Restful Services for the application are not implemented due to issues with project starting setup.
To attempt to run the java you will need to :
-right click the lib project inside the project directory 
-Run as ->Run on Server
(if there is no Server you can add one by doing:File->New->Server->Tomcat v10.Server add installation Directory epl441.project/apacge-tomcat-10.0.13 and add lib to the Configured column)
Running this causes error:
SEVERE: Servlet.init() for servlet [Jersey REST Service] threw exception
java.lang.NoClassDefFoundError: jakarta/inject/Singleton

In the directory epl441.project\Project\lib\src\main\java  are the 3 java files created 2 are part of the Vogella Example and one is used to connect to the access file.

