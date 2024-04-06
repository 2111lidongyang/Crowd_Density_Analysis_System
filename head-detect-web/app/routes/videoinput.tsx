import React, { useState,useRef } from "react";
import { Form } from "@remix-run/react";
import { Container, Header, Grid, Segment, Button, Input, Image, Icon, } from "semantic-ui-react";

import { ActionFunctionArgs } from "@remix-run/node";
import {json} from "@remix-run/node";

export const action = async ({ 
    request,
}:ActionFunctionArgs) => {
    const formData = await request.formData();
}

export default function VideoInput() {
    return (
        <Container>
            <Header as="h2">视频输入</Header>
            <iframe src="http://127.0.0.1:5000/video_feed" frameBorder={0} width="1280" height="720" title="Example Site"></iframe>

        </Container>
    );
}