import { StyleSheet } from "react-native";
import { Color } from "../../../themes/colors";

export const styles = StyleSheet.create({
    
    email_input_view: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: 60,
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 15,
        alignItems: 'center',
        borderRadius: 10, 
        
        
    },
    focus_input:{
        borderWidth:2,
        borderColor:'#C32727',

    },
    Active_input:{

    },
    left_icon: {
        marginLeft:20,
        width: 20,
        height: 20,
        tintColor:Color.grey1,
        resizeMode:'contain'
    },
    right_icon: {
        marginHorizontal:20,
       width: 30,
       height:20,
        tintColor:Color.grey1,
        resizeMode:'contain'
        
    },
    email_input: {
        flex: 1,
        height: 50,
        paddingHorizontal: 10,
        color:'black',
        fontSize:14
    },
    
});