import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native';
import { getPosts } from '../api/blogAPI';
import BlogPost from '../components/BlogPost';

export function BlogScreen() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then((posts) => setPosts(posts));
    }, [])
  return (
    <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
        <SafeAreaView>
            {posts && posts.map((post: any) => (
                <View key={post.id}>
                    <BlogPost title={post.title} body={post.body} />
                </View>
            ))}
        </SafeAreaView>
    </ScrollView>
  )
}
