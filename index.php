<?php

// include 'conn.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="author" content="Abdallah mohamed Ali">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smart Cash Report</title>
    <link rel="icon" href="img/SM-LOGO.jpeg" type="image">
    <link rel="stylesheet" href="style.css">
    
    
</head>
<body>
    <div class="project">
        <div id="title">
        
        <!-- </div>
        
        <div id="header"> -->
            <small>By Abdallah Mohamed Ali @ 2024</small>
            
            <input onchange="userData()" id="datetime" type="date" placeholder="تاريح اليوم">
            <!-- <small id="timeNow"></small> -->
            <!-- <label list="shift" for="shift">الشفت</label> -->
            <input onchange="userData()" list="shift" name="shi" id="shif" placeholder=" AM / PM ">
            <datalist onchange="userData()" id="shift">
                <option value="AM">
                <option value="PM">
            </datalist>
            
            <!-- <label list="Cashier" for="Cashier">الكاشير</label> -->
            <input list="Cashier" name="cash" id="cash" placeholder="اسم الكاشير">
            <datalist onchange="userData()" id="Cashier">
                <option value="Cashier-1">
                <option value="Cashier-2">
        </datalist>
            
            <h2>Smart Cash Report</h2>
            <div id="clearAllData">
                <button id="clearData" onclick="clearData()">بداية الشفت</button>
            </div>
            
            <img src="img/SM-LOGO.jpeg" alt="fave" id="logo">
        </div>

        <div class="cashflow">
            
            <table>
                <thead>
                    <tr>
                        <th>القيمه</th>
                        <th>العدد</th>
                        <th>الفئه النقديه</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td id="val200" ></td>
                        <td><input type="number" placeholder="ادخل العدد" onkeyup="cashValue()" id="count200"></td>
                        <td id="cat200">200</td>
                    </tr>
                    <tr>
                        <td id="val100"></td>
                        <td><input type="number" placeholder="ادخل العدد" onkeyup="cashValue()" id="count100"></td>
                        <td id="cat100">100</td>
                    </tr>
                    <tr>
                        <td id="val50"></td>
                        <td><input type="number" placeholder="ادخل العدد" onkeyup="cashValue()" id="count50"></td>
                        <td id="cat50">50</td>
                    </tr>
                    <tr>
                        <td id="val20"></td>
                        <td><input type="number" placeholder="ادخل العدد" onkeyup="cashValue()" id="count20"></td>
                        <td id="cat20">20</td>
                    </tr>
                    <tr>
                        <td id="val10"></td>
                        <td><input type="number" placeholder="ادخل العدد" onkeyup="cashValue()" id="count10"></td>
                        <td id="cat10">10</td>
                    </tr>
                    <tr>
                        <td id="val5"></td>
                        <td><input type="number" placeholder="ادخل العدد" onkeyup="cashValue()" id="count5"></td>
                        <td id="cat5">5</td>
                    </tr>
                    <tr>
                        <td id="val1"></td>
                        <td><input type="number" placeholder="ادخل العدد" onkeyup="cashValue()" id="count1"></td>
                        <td id="cat1">1</td>
                    </tr>
                    <tr>
                        <td id="sum"></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
                
            
            <table>
                <thead>
                    <tr>
                        <th><input  onkeyup="getVariance()", id="revenue" type="number" placeholder="قيمة الايراد"></th>
                        <th>الإيراد</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td id="expenses"></td>
                        <td >المصروفات</td>
                    </tr>
                    <tr>
                        <td id="visa"></td>
                        <td >Visa</td>
                    </tr>
                    <tr>
                        <td id="cashValue"></td>
                        <td>رصيد النقديه</td>
                    </tr>
                    <tr>
                        <td id="actualCash"></td>
                        <td>الرصيد الفعلي</td>
                    </tr>
                    <tr>
                        <td id="variance"></td>
                        <td>فرق الدرج</td>
                    </tr>
                </tbody>
            </table>
            <div class="cont">
                <div class="inputs">
            
                    <div id="deleviry">
                        <button onclick="addOrder()" id="addord">إضافة اوردر</button>
                        <input id="deliveryName" list="vi" placeholder="اسم الطيار">
                        <datalist id="vi">
                            <option value="طيار-1">
                            <option value="طيار-2">
                            <option value="حالا">
                            <option value="تيك_اواي">
                        </datalist>
                        <input id="check" type="number" placeholder="قيمة الأوردر">
        
                    </div>
                    <div id="visa">
                        <button onclick="addOrderVisa()" id="addvi">إضافة شيك</button>
                        <input id="visaCheck" type="number" placeholder="visa">
                    </div>
                    
                    <div id="expens">
                        <button onclick="addExpenses()" id="addexp">إضافة مصروف</button>
                        <input id="expVal" type="number" placeholder="قيمة">
                        <input id="desc" type="text" placeholder="بيان">
                        <input onchange="getSelectedValue()" list="exp" name="exptype" type="text" placeholder="نوع المصروف" id="ex">
                        <datalist id="exp">
                            <option value="مشتريات"></option>
                            <option value="سلفيات"></option>
                            <option value="CL"></option>
                            <option value="خصم ستاف"></option>
                            <option value="أوفيسر"></option>
                            <option value="ضيافه"></option>
                            <option value="خدمي-بار"></option>                                          
                            <option value="خدمي-مطبخ"></option>
                            <option value="شحن كهرباء"></option>
                            <option value="شحن مياه"></option>
                            <option value="هالك بار"></option>
                            <option value="هالك مطبخ"></option>
                            <option value="صيانه"></option>
                    </datalist>
                    </div>
                    
                </div>
                <div class="lbl">
                    <div class="lbl1">
                        <h6>إجمالي أوردرات الدليفري</h6>
                        <h6 id="totalDelivery"></h6>
                    
                        <h6>عدد الأوردرات</h6>
                        <h6 id="orderCount"></h6>
                    </div>
                    <div class="lbl2">
                        <h6>خدمة توصيل طيار-1</h6>
                        <h6 id="serviceOne"></h6>
                    
                    <h6>خدمة توصيل طيار-2</h6>
                    <h6 id="serviceTwo"></h6>
                    </div>
                    
                    
                    
                </div>
            </div>
        </div>
        
        <div class="info">
            <div class="output">
            
                <div id="deliveryTable">
                    <h6>أوردرات الدليڤري</h6>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th id="dn">اسم الطيار</th>
                                <th id="dv">القيمه</th>
                            </tr>
                        </thead>
                        <tbody id="deliveryBody">
                            
                        </tbody>
                    </table>
                </div>
                <div id="visaTable">
                    <h6>أوردرات_الڤيزا</h6>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th id="vv">القيمه</th>
                            </tr>
                        </thead>
                        
                        <tbody id="visaBody">
                            
                        </tbody>
                        
                    </table>
                </div>
                <div id="tableE">
                    <h6>المصروفات</h6>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th id="value">القيمه</th>
                                <th id="description">البيان</th>
                                <th id ="expensesType">نوع المصروف</th>
                                <th id="receiptNo">رقم</th>
        
                            </tr>
                        </thead>
                        <tbody id="tbody">
                            
                        </tbody>                                                  
                   </table>
                </div>                     
            </div>             
        </div>
      
    </div>
    <footer>   
    <div class="footer">
        <p>all right reserved &copy; by | <strong>Smart Solutions For RRP and Web Applications</strong></p>
    </div>
    </footer>
    



    <script src="main.js" ></script>
</body>
</html>
