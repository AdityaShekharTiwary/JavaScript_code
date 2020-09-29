var user = {
    firstName : "Aditya",
    lastName : "Tiwary",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true,
    courseList: [],
    buyCourse : function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount : function(){
        return `${this.fisrtName} is enrolled in total of ${this.courseList.length} courses`;
    },
};
console.log(user.getCourseCount());
user.buyCourse("React JS Course");
console.log(user.getCourseCount());

