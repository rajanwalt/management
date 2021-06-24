import React, { Component } from 'react'
import {
    Button,
    Text
} from 'react-native';

function AppHeader(props)  {
    
    function goBack ()  {
        if(props && props.backLink)  {

        }
        else {
            
        }
    }
    
    return (
        <View>
            <Button onPress={goBack} />
            <Text style={{ 
                    height: 50,
                    borderBottomColor: 'blue',
                    backgroundColor: 'blue',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    color: 'black'
                }}>Students</Text>
        </View>
        
    )
}

// class AppHeader extends Component  {
//     render()  {
//         return (
//             <Text style={{ 
//                 height: 50,
//                 borderBottomColor: 'blue',
//                 backgroundColor: 'blue',
//                 textAlign: 'center',
//                 textAlignVertical: 'center',
//                 color: 'black'
//               }}>Attendence</Text>
//         )
//     }
// }

export default AppHeader;