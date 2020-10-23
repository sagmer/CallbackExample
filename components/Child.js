import React, { useRef, useState, memo } from "react";
import {View, Button, Text} from "react-native";

const Child = props =>{
    let renderCount= useRef(0);
    const [childCounter, setChildCounter]= useState(0);
    renderCount.current++;

    return (
        <View> 
            <Button title="increment child counter" onPress={()=>{
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

export default memo(Child);
