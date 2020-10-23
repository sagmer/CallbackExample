import React, {useCallback, useRef, useState} from "react";
import {View, Text, Button, StyleSheet} from "react-native";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Card from "./Card";
const Parent = props =>{
    
    const [parentcounter, setParentCounter]= useState(0);
    let renderCount= useRef(0);
    renderCount.current++;
  
    const buttonPressHandler = ()=>{
        setParentCounter(parentcounter+1);
    };
    
    const child1ButtonPress =()=>{
        console.log("child-1 button pressed");
    }
    
    const child2ButtonPress =useCallback(()=>{
        console.log("child-2 button pressed");
    },[]);

    return (
        <View style={styles.container}>         
            <Card> 
                <Button title="increment Parent counter" onPress={buttonPressHandler}/>
                <Text>Parent Counter: {parentcounter}</Text>
                <Text>Parent component Render Count: {renderCount.current}</Text>
            </Card>
            <Card> 
                <Child1 buttonPress={child1ButtonPress}/>
            </Card>
            <Card> 
                <Child2 buttonPress={child2ButtonPress}/>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00004d',
        flexDirection:"column",
        alignItems: 'center',
        justifyContent: 'center',
    }
  });

 export default Parent;