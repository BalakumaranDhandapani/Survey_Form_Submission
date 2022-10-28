// Functions for creating HTML elements
function createLabel(tagname,attname,attvalue,content)
{
    var ele=document.createElement(tagname);
    ele.setAttribute(attname,attvalue);
    ele.innerHTML=content;
    return ele;
}
function createLinebreak(tagname)
{
    var ele=document.createElement(tagname);
    return ele;
}
function createInput(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2)
{
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    ele.setAttribute(attrname2,attrvalue2);
    return ele;
}
//Input type for food items
function createInput1(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3)
{
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    ele.setAttribute(attrname2,attrvalue2);
    ele.setAttribute(attrname3,attrvalue3);
    return ele;
}

//Creating form to get the data from the user

var form=createLabel("form","class","myForm","");
var heading=createLabel("h1","class","heading","Form Submission:");
var br=createLinebreak("br");
var fname=createLabel("label","for","fname","First Name");
var br1=createLinebreak("br");
var finput=createInput("input","type","text","id","first-name","placeholder","FirstName");
var br2=createLinebreak("br");
var lname=createLabel("label","for","lname","Last Name");
var br3=createLinebreak("br");
var linput=createInput("input","type","text","id","last-name","placeholder","LastName");
var br4=createLinebreak("br");
var address=createLabel("label","for","addressline","Address");
var br5=createLinebreak("br");
var addressinput=createInput("input","type","text","id","addressline","placeholder","Enter your Address");
var br6=createLinebreak("br");
var pin=createLabel("label","for","pin","Pincode");
var br7=createLinebreak("br");
var pininput=createInput("input","type","number","id","pincode","placeholder","Enter Pincode");
var br8=createLinebreak("br");

var gender=createLabel("label","for","gender","Gender");
var br9=createLinebreak("br");

var maleinput=document.createElement("input");
maleinput.setAttribute("type","radio");
maleinput.setAttribute("name","gender");
maleinput.setAttribute("id","male");
maleinput.setAttribute("value","Male");

var male=createLabel("label","for","male","Male");

var femaleinput=document.createElement("input");
femaleinput.setAttribute("type","radio");
femaleinput.setAttribute("name","gender");
femaleinput.setAttribute("id","female");
femaleinput.setAttribute("value","Female");

var female=createLabel("label","for","female","Female");
var br10=createLinebreak("br");

var food=createLabel("label","for","food","Choice of Food(must choose atleast 2 out of 5 options)");
var br11=createLinebreak("br");
var northinput=createInput1("input","type","checkbox","name","food","id","northind","value","NorthIndian");
var north=createLabel("label","for","food","North Indian");
var br12=createLinebreak("br");
var southinput=createInput1("input","type","checkbox","name","food","id","southind","value","SouthIndian");
var south=createLabel("label","for","food","South Indian");
var br13=createLinebreak("br");
var chineseinput=createInput1("input","type","checkbox","name","food","id","chinese","value","Chinese");
var chinese=createLabel("label","for","food","Chinese");
var br14=createLinebreak("br");
var japaninput=createInput1("input","type","checkbox","name","food","id","japanese","value","Japanese");
var japan=createLabel("label","for","food","Japanese");
var br15=createLinebreak("br");
var contiinput=createInput1("input","type","checkbox","name","food","id","continental","value","Continental");
var conti=createLabel("label","for","food","Continental");
var br16=createLinebreak("br");

var state=createLabel("label","for","state","State");
var br17=createLinebreak("br");
var stateinput=createInput("input","type","text","id","state","placeholder","State");
var br18=createLinebreak("br");

var country=createLabel("label","for","country","Country");
var br19=createLinebreak("br");
var cinput=createInput("input","type","text","id","country","placeholder","Country");
var br20=createLinebreak("br");


{/* <button type="submit">Submit</button> */}

var button1=document.createElement("button");
button1.setAttribute("type","button1");
button1.setAttribute("class","btn-outline-secondary");
button1.setAttribute("id","button1");
button1.innerHTML="Submit";
button1.addEventListener("click",add);

form.append(heading,fname,br1,finput,br2,lname,br3,linput,br4,address,br5,addressinput,br6,pin,br7,pininput,br8,gender,br9,maleinput,male,femaleinput,female,br10,food,br11,northinput,north,br12,southinput,south,br13,chineseinput,chinese,br14,japaninput,japan,br15,contiinput,conti,br16,state,br17,stateinput,br18,country,br19,cinput,br20,button1);

//creating Tables

var div1=document.createElement("div");
div1.style.overflow='auto';             // to make table responsive while using array of elements in a cell.

var tab=document.createElement("table");
tab.setAttribute("class","table");

var thead=document.createElement("thead");
thead.setAttribute("class","thead-dark");

var tr=document.createElement("tr");

var th1=createLabel("th","for","col1","First Name");
var th2=createLabel("th","for","col2","Last Name");
var th3=createLabel("th","for","col3","Address");
var th4=createLabel("th","for","col4","Pincode");
var th5=createLabel("th","for","col5","Gender");
var th6=createLabel("th","for","col6","Food");
var th7=createLabel("th","for","col7","State");
var th8=createLabel("th","for","col8","Country");

tr.append(th1,th2,th3,th4,th5,th6,th7,th8);
thead.append(tr);

tab.append(thead);

div1.append(tab);

//creating container and appending
var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
row.setAttribute("class","row");
var column1=document.createElement("div");
column1.setAttribute("class","left-column-md-6");
var column2=document.createElement("div");
column2.setAttribute("class","right-column-md-6");
column2.innerHTML="<h2>Temporary Database:</h2>";

column1.append(form);
column2.append(div1);

row.append(column1,column2);

container.append(row);

document.body.append(container);

// onclick function definiton
function add(event)
{
    event.preventDefault();
    var selectedfoods=[];
    var temp=[];
    var tfname=document.getElementById('first-name').value;
    var tlname=document.getElementById('last-name').value;
    var taddress=document.getElementById('addressline').value;
    var tpin=document.getElementById('pincode').value;
    var tgender=document.querySelector('input[name="gender"]:checked').value;
    var tfood=document.getElementsByName("food");
    for(var i=0;i<tfood.length;i++)
    {
        if(tfood[i].checked)
        {
            selectedfoods.push(tfood[i].value);
        }
    } foo(selectedfoods);
    var tstate=document.getElementById('state').value;
    var tcountry=document.getElementById('country').value;

    var table=document.getElementsByTagName('table')[0];

    var newRow = table.insertRow(1);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);
    
    cell1.innerHTML = tfname;
    cell2.innerHTML = tlname;
    cell3.innerHTML = taddress;
    cell4.innerHTML = tpin;
    cell5.innerHTML = tgender;
    cell6.innerHTML = selectedfoods;
    cell7.innerHTML = tstate;
    cell8.innerHTML = tcountry;

    //selection of 2 out of 5 foods
    function foo(selectedfoods)
    {
        if(selectedfoods.length<2)
    {
        alert("Select Minimum 2 Food items");
        return none;       // which means the data will not be added into the table until the condition is satisfied.
    }
    else
    {
        return selectedfoods;
    }

    }

    //Clearing the formfields after updating the record to table.
    var inputs=document.querySelectorAll('input');
    inputs.forEach(input => input.value='' );

    // //Clearing radio buttons
    var radio = document.querySelector('input[type=radio][name=gender]:checked');
    radio.checked = false;

    // //resetting all checkboxes
    var f=[];
    f = document.querySelectorAll('input[type=checkbox]:checked');
    f.forEach(element => {
       element.checked = false; 
    });
    
}