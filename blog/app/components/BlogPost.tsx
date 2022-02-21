import React from 'react'
import { Button, Card, Paragraph } from 'react-native-paper';

interface BlogPostProps {
    title: string;
    body: string;
}
function BlogPost(props: BlogPostProps) {
  return (
    <Card style={styles.card}>
        <Card.Title title={props.title} />
        <Card.Content>
            <Paragraph>{props.body}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
        </Card.Actions>
    </Card>
  )
}

const styles = {
    card: {
        marginTop: 10,
        marginBottom: 50,
    }
}


export default BlogPost