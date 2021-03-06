import { makestyles, makeStyles } from "@material-ui/core/styles";

//iphone8縦画面
const iphone8tateStyle=makeStyles({
    device1:{
        //左側のiframeのCSS
        width:344,
        height:624,
        top:112,
        left:188,
        position:'absolute',
        marginTop:70,
        zIndex:2
    },
    img1:{
        //左側のスマホのCSS
        position:'absolute',
        width:800,
        left:-48,
        pointerEvents:'none',
        marginTop:70,
        zIndex:3
    },
    device2:{
        //右側のiframeのCSS
        width:355,
        height:640,
        top:100,
        left:896,
        position:'absolute',
        marginTop:70,
        zIndex:2
    },
    img2:{
        //右側のスマホのCSS
        position:'absolute',
        width:800,
        left:664,
        pointerEvents:'none',
        marginTop:70,
        zIndex:50
    }
});

//iphone8横画面
const iphone8yokoStyle=makeStyles({
    //左側のiframeのCSS
    device1:{
        width:625,
        height:365,
        top:250,
        left:110,
        position:'absolute',
        zIndex:2
    },
    //左側のスマホのCSS
    img1:{
        position:'absolute',
        width:850,
        left:-10,
        pointerEvents:'none',
        zIndex:50
    },
    //右側のiframeのCSS
    device2:{
        width:625,
        height:365,
        top:250,
        left:1020,
        position:'absolute',
        zIndex:2
    },
    //右側のスマホのCSS
    img2:{
        position:'absolute',
        width:850,
        left:900,
        pointerEvents:'none',
        zIndex:50
    }
});

//iphone11縦画面
const iphone11tateStyle=makeStyles({
    device1:{
        //左側のiframeのCSS
        width:378,
        height:790,
        top:80,
        left:265,
        position:'absolute',
        marginTop:32,
        zIndex:2
    },
    img1:{
        //左側のスマホのCSS
        position:'absolute',
        width:1000,
        left:-60,
        pointerEvents:'none',
        zIndex:50
    },
    device2:{
        //右側のiframeのCSS
        width:375,
        height:780,
        top:90,
        left:1100,
        position:'absolute',
        marginTop:20,
        zIndex:2
    },
    img2:{
        //右側のスマホのCSS
        position:'absolute',
        width:1000,
        left:780,
        pointerEvents:'none',
        marginTop:0,
        zIndex:50
    }
});

//iphone11横画面
const iphone11yokoStyle=makeStyles({
    //左側のiframeのCSS
    device1:{
        width:665,
        height:315,
        top:275,
        left:90,
        position:'absolute',
        zIndex:2
    },
    //左側のスマホのCSS
    img1:{
        position:'absolute',
        width:850,
        left:-10,
        pointerEvents:'none',
        zIndex:50
    },
    //右側のiframeのCSS
    device2:{
        width:665,
        height:315,
        top:275,
        left:1000,
        position:'absolute',
        zIndex:2
    },
    //右側のスマホのCSS
    img2:{
        position:'absolute',
        width:850,
        left:900,
        pointerEvents:'none',
        zIndex:50
    }
});


const modalStyleList={
    iphone8:iphone8yokoStyle,
    iphone11:iphone11yokoStyle,
    iphone8tate:iphone8tateStyle,
    iphone11tate:iphone11tateStyle
}

export default modalStyleList;