// * Define data in this project
function Student(_id, _name, _email, _password, _math, _literature) {
    this.id = _id;
    this.name = _name;
    this.email = _email;
    this.password = _password;
    this.math = _math;
    this.literature = _literature;
    this.averageScore = function() {
        return (this.math + this.literature) / 2; 
    }; 
}
