{
 /**
  * Type Aliases  
  */   
 type Text = string;
 const name: Text = 'ell';
 const address: Text = 'korea';

 type Num = number;
 type Student = {
     name : string;
     age : number
 }

 const student: Student = {
     name: "jihyun",
     age: 27
 };

 /** 
 * String Literal Types
 * 값 자체를 타입으로 결정
 */
type Name = 'name';
let names: Name;
// names = 'jihyun'; Error
names = 'name';

type Bool = true;
}