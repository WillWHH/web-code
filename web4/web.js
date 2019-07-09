/*定义Employee类*/
function Employee(name,salary,number,office,work){
	this.name = name;
	this.salary = salary;
	this.number = number;
	this.office = office;
	this.work = work;
}
Employee.prototype.show = function() {
		alert("姓名："+this.name+"\n编号："+this.number+"\n工作："+this.work+"\n办公地点："+this.office+"\n工资："+this.salary);
	};
/*定义Manager类*/
function Manager(inferiors){
	this.inferiors = inferiors;
}
Manager.prototype = new Employee();
Manager.prototype.getInferiors = function(){
		alert(this.name + "的下属有：" + this.inferiors);
	};
/*定义Secretary类*/
function Secretary(superior){
	this.superior = superior;
}
Secretary.prototype = new Employee();
Secretary.prototype.getSuperior = function(){
		alert(this.name + "的上司是：" + this.superior);
	};

var em1 = new Employee("张三",8000,2019042101,"A1-201","开发部成员");
var em2 = new Employee("李四",8000,2019042102,"A1-201","开发部成员");
var em3 = new Employee("王五",8500,2019042103,"A1-202","设计部成员");
var em4 = new Employee("梁六",9000,2019042104,"A1-202","设计部成员");
var em5 = new Employee("阮七",8000,2019042105,"A1-202","设计部成员");
var em6 = new Employee("何八",10000,2019042106,"A1-203","测试部成员");
var em7 = new Employee("卢九",12000,2019042107,"A1-203","测试部成员");

var ma1 = new Manager("张三,李四");
ma1.name = "老张";
ma1.salary = 20000;
ma1.number = 2018042101;
ma1.office = "A2-201";
ma1.work = "开发部主管";

var ma2 = new Manager("王五,梁六,阮七");
ma2.name = "老李";
ma2.salary = 22000;
ma2.number = 2018042102;
ma2.office = "A2-202";
ma2.work = "设计部主管";

var ma3 = new Manager("何八,卢九");
ma3.name = "老何";
ma3.salary = 20000;
ma3.number = 2018042103;
ma3.office = "A2-203";
ma3.work = "测试部主管";

var sec1 = new Secretary("老张");
sec1.name = "小李";
sec1.salary = 12000;
sec1.number = 2019010101;
sec1.office = "A2-201";
sec1.work = "开发部秘书";

var sec2 = new Secretary("老李");
sec2.name = "小郑";
sec2.salary = 12000;
sec2.number = 2019010102;
sec2.office = "A2-202";
sec2.work = "设计部秘书";

var sec3 = new Secretary("老何");
sec3.name = "小王";
sec3.salary = 12000;
sec3.number = 2019010103;
sec3.office = "A2-203";
sec3.work = "测试部秘书";

function f1(){
	em1.show();
}
function f2(){
	em2.show();
}
function f3(){
	em3.show();
}
function f4(){
	em4.show();
}
function f5(){
	em5.show();
}
function f6(){
	em6.show();
}
function f7(){
	em7.show();
}
function fu1(){
	ma1.show();
	ma1.getInferiors();
}
function fu2(){
	ma2.show();
	ma2.getInferiors();
}
function fu3(){
	ma3.show();
	ma3.getInferiors();
}
function fun1(){
	sec1.show();
	sec1.getSuperior();
}
function fun2(){
	sec2.show();
	sec2.getSuperior();
}
function fun3(){
	sec3.show();
	sec3.getSuperior();
}