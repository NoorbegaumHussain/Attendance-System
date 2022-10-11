from flask import Flask,jsonify,request
import mysql.connector as mysql
from flask_cors import CORS , cross_origin
conn=mysql.connect(
    host="localhost",
    user="root",
    password="",
    database="attendance_management"
)
curs=conn.cursor(buffered=True)
# 

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS']='Content-Type'

# @app.route('/displayhello',methods=['GET'])      
# #route is all the pages in an application
# def displayhello():
#     # return ("hello world")
#     return (jsonify({"result":"success"}))

# @app.route('/register',methods=['GET']) 
# def register():
    
#     return("200ok")

@app.route('/registerStudent',methods=['POST']) 
def registerStudent():
    data=request.get_json()
    print(data)
    name=data['name']
    usn=data['usn']
    sem=data['sem']
    email=data['email']
    phone_number=data['phone_number']
    password=data['password']
    batch_year=data['batch_year']
    division=data['division']   
    branch=data['branch']
    
    sqlQuery="insert into student (name, usn, sem, email, phone_number, password,batch_year,division, branch) values(%s,%s,%s,%s,%s,%s,%s,%s,%s)"
    values=(name, usn, sem, email, phone_number, password, batch_year, division, branch)
    curs.execute(sqlQuery,values)
    conn.commit()
    return jsonify({"message": "Success"})

@app.route('/login', methods=['POST'])
def login():
   data=request.get_json()
   print(data)
   user = data['username']
   password = data['password']
   userType = data['userType']
   if userType == 'Admin':
       sqlQuery = "select * from admin where name=%s and password=%s"
       values=(user,password)
       curs.execute(sqlQuery,values)
       if (curs.rowcount>0):
           return jsonify({"message": "valid user",'status':0})
       else:
            return jsonify({"message": "invalid username or password",'status':1})
   elif userType == "Student":
       sqlQuery="select * from student where name=%s and password=%s"
       values=(user,password)
       curs.execute(sqlQuery,values)
       if (curs.rowcount>0):
           return jsonify({"message": "valid user",'status':0})
       else:
            return jsonify({"message": "invalid username or password",'status':1})
   else:
       sqlQuery="select * from teacher where name=%s and password=%s"
       values=(user,password)
       curs.execute(sqlQuery,values)
       if (curs.rowcount>0):
           return jsonify({"message": "valid user",'status':0})
       else:
            return jsonify({"message": "invalid username or password",'status':1})
 

@app.route('/registerTeacher',methods=['POST']) 
def registerTeacher():
    data=request.get_json()
    name=data['name']
    email=data['email']
    phone_number=data['phone_number']
    password=data['password']  
    branch=data['branch']
    
    sqlQuery="insert into student_register_page (name, usn, sem, email, phone_number, password,batch_year,division, branch) values(%s,%s,%s,%s,%s,%s,%s,%s,%s)"
    values=(name, email, phone_number, password, branch)
    curs.execute(sqlQuery,values)
    conn.commit()
    return jsonify({"message": "Success"})

if __name__ == '__main__':
    app.run(port=5000,debug=True) #use debug=true only in developer mode
                                   # app.run creates a server
                                   #browser only makes get requests 
                                    #IMP THINGS IN DEVELOPING APIs 1.endpoint   2.get/post requests   3.json request and response
                                   