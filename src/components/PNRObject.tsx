import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

const PNRDetails = ({ Data }) => {
    const pnrData=Data?.data;
//     console.log(pnrData)
    const [status,setStatus]=useState(false)
    if(!pnrData)
    {
        return(
            <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
              <Text style={{textAlign:'center',textAlignVertical:'center',color:'#000',fontSize: 20,}}>Not Fund</Text>
            </View>
            )
    }
  return (
    <ScrollView style={{height:'100%',width:'100%',}}>
      <Card containerStyle={styles.cardContainer}>
       <View style={[styles.view,{borderWidth:0}]}>
            <Text style={styles.header}>PNR Number:</Text> 
            <Text style={styles.header}>{pnrData?.pnr_number}</Text>
       </View>
       <View style={styles.view}>
            <Text style={styles.text}>Train Number:</Text> 
            <Text style={styles.text}>{pnrData?.train_number}</Text>
       </View>
       <View style={styles.view}>
            <Text style={styles.text}>Train Name:</Text> 
            <Text style={styles.text}>{pnrData?.train_name}</Text>
       </View>
       <View style={styles.view}>
            <Text style={styles.text}>Boarding Station:</Text> 
            <Text style={styles.text}>{pnrData?.boarding_station?.station_name}</Text>
       </View>
       <View style={styles.view}>
            <Text style={styles.text}>Reservation Upto:</Text> 
            <Text style={styles.text}>{pnrData?.reservation_upto?.station_name}</Text>
       </View>
       <View style={styles.view}>
            <Text style={styles.text}>No. of Passengers:</Text> 
            <Text style={styles.text}>{pnrData?.no_of_passengers}</Text>
       </View>
       <View style={styles.view}>
            <Text style={styles.text}>Class:</Text> 
            <Text style={styles.text}>{pnrData?.class}</Text>
       </View>
       <View style={styles.view}>
            <Text style={styles.text}>Quota:</Text> 
            <Text style={styles.text}>{pnrData?.quota}</Text>
       </View>
       <View style={styles.view}>
            <Text style={styles.text}>Journey Date:</Text> 
            <Text style={styles.text}>{pnrData?.journey_date}</Text>
       </View>
       <View style={styles.view}>
            <Text style={styles.text}>Booking Date:</Text> 
            <Text style={styles.text}>{pnrData?.booking_date}</Text>
       </View>
        {!status&&<Button 
          buttonStyle={styles.button}
          title="More Details"
          onPress={() => {
            setStatus(true)
          }} 
        />}
        {status&&<>
        <View style={[styles.view,{borderWidth:0}]}>
            <Text style={styles.header}>Passengers Details:</Text> 
       </View>
        {pnrData?.passenger?.map((data)=>{return(<>
            <View style={[styles.view,{borderWidth:0}]}>
                    <Text style={styles.header}>{data?.passengerName}</Text> 
            </View>
            <View style={styles.view}>
                    <Text style={styles.text}>Passenger Age:</Text> 
                    <Text style={styles.text}>{data?.passengerAge}</Text>
            </View>
            <View style={styles.view}>
                    <Text style={styles.text}>Current Status:</Text> 
                    <Text style={styles.text}>{data?.currentStatus}</Text>
            </View>
            <View style={styles.view}>
                    <Text style={styles.text}>Current Berth No:</Text> 
                    <Text style={styles.text}>{data?.currentBerthNo}</Text>
            </View>
            <View style={styles.view}>
                    <Text style={styles.text}>Current Berth Code:</Text> 
                    <Text style={styles.text}>{data?.currentBerthCode}</Text>
            </View>
            <View style={styles.view}>
                    <Text style={styles.text}>Current Coach Id:</Text> 
                    <Text style={styles.text}>{data?.currentCoachId}</Text>
            </View>
        </>)})
       }
        </>
        }
      </Card>
    </ScrollView>
  );
};

export default PNRDetails;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 10,
    },
    cardContainer: {
        margin: 10,
        borderRadius: 10,
        elevation: 3, // For Android shadow
      },
      header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
        color:'#000',
    },
    text: {
        fontSize: 16,
        marginBottom: 5,
        color:'#000',
    },
    button: {
        borderRadius:10,
        marginTop: 15,
        backgroundColor: '#007AFF', // Change the button color as needed
    },
    view:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:0.2,
        padding:5,
        marginTop:13,
      }
  });
