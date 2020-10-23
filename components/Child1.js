import React, { useRef, useState, memo } from "react";
import {View, Button, Text} from "react-native";
import Card from "./Card";

const Child1 = props =>{
    let renderCount= useRef(0);
    const [childCounter, setChildCounter]= useState(0);
    renderCount.current++;

    return (
        <View> 
            <Button title="increment Child-1 counter" onPress={()=>{
                    props.buttonPress();
                    setChildCounter(childCounter+1);
                }
            }
            />
            <Text>Child Counter: {childCounter}</Text>
            <Text>Child component render count: {renderCount.current}</Text>
        </View>
    )
}

export default Child1;
