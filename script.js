//your JS code here. If required.
/*  your css code here. If applicable */
body{
    margin:0;
    padding: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container{
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap:1rem;
}
#fb{
    color:blue;
    font-size:3rem;
    font-weight: bold;
}
#desc{
    font-size: 1.2rem;
    font-weight: bold;
}
form{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
    width:300px;
    height:300px;
}
form input{
    width:100%;
    padding: 0.5rem;
    font-weight: bold;
}
#login{
    width:100%;
    padding: 0.8rem;
    border: none;
    background-color: rgb(78, 78, 250);
    color:white;
    font-weight: bold;
    cursor: pointer;
}
a{
    text-decoration: none;
    font-size: 1.2rem;
}
#create{
    width: 65%;
    padding: 0.8rem;
    border: none;
    border-radius: 0.5rem;
    background-color: rgb(27, 238, 27);
    color:white;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
}
.login-form{
    box-shadow: 0 0 20px #ccc;
}