import React, {useCallback, useRef, useState} from "react";
import {View, Text, Button, StyleSheet} from "react-native";
import Child from "./Child";

const Parent = props =>{
    
    const [withCallback, setWithCallback] = useState(true);
    const [parentcounter, setParentCounter]= useState(0);
    let renderCount= useRef(0);
    renderCount.current++;
    let childButtonPress;
    
    
    const buttonPressHandler = ()=>{
        setParentCounter(parentcounter+1);
    };
    
    childButtonPress =useCallback(()=>{
        console.log("child button pressed");
    },[]);

    if(!withCallback){
        childButtonPress=()=>{console.log("child button pressed");}
    }

    return (
        <View style={styles.container}> 
            <View>
                <Button title="SWITCH" color="blue" onPress={()=>setWithCallback(!withCallback)}/>
                {withCallback && <Text>RESULTS WITH CALLBACK and MEMO</Text>}
                {!withCallback && <Text>RESULTS WITHOUT CALLBACK and MEMO</Text>}
            </View>
           
            <View style={styles.box}> 
                <Button title="increment parent counter" onPress={buttonPressHandler}/>
                <Text>Parent Counter: {parentcounter}</Text>
                <Text>Parent Component Render Count: {renderCount.current}</Text>
            </View>
            <View style={styles.box}> 
                <Child buttonPress={childButtonPress}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        flexDirection:"column",
        alignItems: 'center',
        justifyContent: 'center',
    },
    box:{
        shadowColor: 'black',
        width:300,
        height:100,
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        marginVertical:20,
        padding:10
    }
  });

 export default Parent;