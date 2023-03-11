<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1 style="text-align: center">ĐƠN HÀNG SERI SINH NHẬT NGÀY {{$date}}</h1>
    <p>Bình thân mến,</p>
    <p >Thông tin đơn hàng</p>
    <p>Tên người mua: {{$name}}</p>
    <p>Số điện thoại: <a href="{{$phone}}">{{$phone}}</a></p>
    <p>Địa chỉ:{{$address}}</p>
    <p>Ghi chú: {{$note ?? ''}}</p>
    <p><b>Nội dung mua:<b></p>
    <p>Seri: {{$codeAndSeri}} <span>-Mệnh giá: {{$faceValueOfMoney}}</span><span>-Giá bán:{{$price ?? ''}}</span></p>
    <br>
    <p>Tiền ship: {{$pay_method == 1 ? '30.000 vnd' : '0'}}</p>
    <p>Phương thức thanh toán: {{$pay_method == 1 ? 'COD' : 'chuyển khoản'}}</p>
    <p>Tổng tiền: {{$total}}</p>
</body>
</html>
