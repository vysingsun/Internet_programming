<html>
    <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <style>
            form{
                width: 400px;
                height: 250px;
            }
        </style>
    </head>
    <body>
        <!-- <form action="htmlregister.php" method="post">
            <label for="fullname">FullName: </label>
            <input type="text" name="name"> <br>
            <label for="number">Number:</label>
            <input type="number" name="number"><br>
            <label for="email">Email: </label>
            <input type="text" name="email"><br>
            <input type="Submit">
        </form> -->
        <form action="htmlregister.php" method="post">
  <div class="form-group">
    <label for="exampleInputEmail1">Name: </label>
    <input type="text" name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter full name">
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Number: </label>
    <input type="number" name="number" class="form-control" id="exampleInputPassword1" placeholder="Enter number">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Email: </label>
    <input type="email" name="email" class="form-control" id="exampleInputPassword1" placeholder="Enter number">
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </body>
</html>

