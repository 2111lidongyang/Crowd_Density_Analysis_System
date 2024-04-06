import React, { useState,useRef } from "react";
import { Form } from "@remix-run/react";
import { Container, Header, Grid, Segment, Button, Input, Image, Icon, } from "semantic-ui-react";

import { ActionFunctionArgs } from "@remix-run/node";
import {json} from "@remix-run/node";
import HeatMap from "./heatmap";

export const action = async ({ 
    request,
}:ActionFunctionArgs) => {
    const formData = await request.formData();
}

export default function ImageInput() {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [resultImage, setResultImage] = useState<File | null>(null);
    const [heatMap, setHeatMap] = useState<File | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if(file){
            setSelectedImage(file);
            const formData = new FormData();
            formData.append("image", file);

            try{
                const response = await fetch("http://127.0.0.1:5000/image_feed", {
                    'method':'POST',
                    'body':formData,
                });

                const heatmap = await fetch("http://127.0.0.1:5000/image_feed?q=hm", {
                    'method':'POST',
                    'body':formData,
                });

            if(!response.ok){
                throw new Error("HTTP Error:"+response.statusText);
            }
            const blob = await response.blob();
            const result = new File([blob], "resultImage");
            setResultImage(result);

            const hmap = await heatmap.blob();
            const htmap = new File([hmap], "heatmap");
            setHeatMap(htmap);

            console.log(response)

            }catch(error){
                console.error(error);
            }   
        }
    };

    const handleImageCancel = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setSelectedImage(null);
        //还要清除input中的file
        document.getElementById("imagefile")?.setAttribute("value", "");
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };
    const handleIconClick = () => {
        // Make sure the current element exists and is of type 'input'
        if(fileInputRef.current && fileInputRef.current instanceof HTMLInputElement){
            fileInputRef.current.click();
        }
    };

    return (
        <Container>
            <Header as="h2">图片输入</Header>
            <Form action="/imageinput" method="post" >
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <Segment>
                                {selectedImage ? (
                                    <div style={{ position: 'relative' }}>
                                    <Image src={URL.createObjectURL(selectedImage)} alt="" />
                                    <Icon
                                        name="cancel"
                                        size="huge"  // 增加图标的大小
                                        style={{
                                            position: 'absolute',
                                            top: '10px',  // 根据需要调整位置
                                            right: '10px', // 根据需要调整位置
                                            cursor: 'pointer',
                                            color: 'red', // 白色图标
                                        }}
                                        onClick={handleImageCancel}
                                        
                                    />
                                </div>
                                ) : (
                                    <Button
                                        icon
                                        labelPosition="left"
                                        onClick={handleIconClick}
                                    >
                                    <Icon name="upload" />
                                    选择图片
                                  </Button>
                                )}
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Button
                            icon
                            type="submit"
                            >
                            <Icon name="arrow right" size="big"/>
                            </Button>
                        </Grid.Column>
                        <Grid.Column width={6}>
                        <Segment>
                                {resultImage ? (
                                    <div style={{ position: 'relative' }}>
                                    <Image src={URL.createObjectURL(resultImage)} alt="" />
                                </div>
                                ) : (
                                    <div>
                                        <p>输出图片</p>
                                    </div>
                                )}
                        </Segment>
                        <Segment>
                            {heatMap ? (
                                <div>
                                    <Image src={URL.createObjectURL(heatMap)} alt="" style={{ width: '400px', height: '300px' }} />
                                </div>
                            ) : (
                                <div>
                                    <p>热力图</p>
                                </div>
                            )}
                        </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <input
                  ref={fileInputRef}
                  name="image"
                  type="file"
                  accept="image/*"
                  required
                  onChange={handleImageChange}
                  style={{ display: 'none' }} // 隐藏原生输入
                />
            </Form>
        </Container>
    );
}