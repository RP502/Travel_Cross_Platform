import React from 'react'
import { Stack, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';


export default function AuthLayout() {
    
    const router = useRouter();
    return (
        <Stack 
            screenOptions={{
              
          }}>
            <Stack.Screen name="login" options={{ title: 'Login' }} />
            <Stack.Screen name="register" options={{title: 'Register' }}/>        
        </Stack>
    )
}