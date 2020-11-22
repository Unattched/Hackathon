package main

import (
	"cloud.google.com/go/firestore"
	"context"
	firebase "firebase.google.com/go"
	"fmt"
	"google.golang.org/api/option"
	"log"
)

func main() {
	ctx := context.Background()
	sa := option.WithCredentialsFile("./PrivateKey.json")
	app, err := firebase.NewApp(ctx, nil, sa)
	if err != nil {
		log.Fatal(err)
	}
	client, err := app.Firestore(ctx)
	if err != nil {
		log.Fatal(err)
	}
	data := SendData()
	client.Collection("PowerManager").Doc("PowerOutput").Update(ctx, []firestore.Update {
		{
			Path: "clientName", // this is a placeholder for the name of the client
			Value: data,
		},
	})
	query := client.Collection("PowerManager").Where("clientName", "==", data) // this would be used to query certain items to send to the front end
	fmt.Println(query)
	defer client.Close()
}

func SendData() map[string]interface{} {
	var (
		nodeData [24]int
		homeData [24]int
		gridData [24]int
	)
	for i := 0; i < 24; i++	{
		nodeData[i] = i + 4
	}
	for i := 0; i < 24; i++	{
		homeData[i] = i + 11
	}
	for i := 0; i < 24; i++	{
		gridData[i] = i + 3
	}
	// these are all placeholders, this will be directly interacting with the installed products
	return map[string]interface{} {
		"EnergyOutputToHome": homeData,
		"EnergyOutputToGrid": gridData,
		"EnergyOutputToNode": nodeData,
	}
}
