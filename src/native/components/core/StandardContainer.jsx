import React from 'react'
import { Keyboard, SafeAreaView, Pressable } from 'react-native'
import { PageLoader } from '..'
import { appState, setDimensions } from '../../hookStates'

const StandardContainer = ({ children, style }) => {
  const { isAuthenticating } = appState.useAppState()

  return (
    <>
      {isAuthenticating.get() && <PageLoader />}
      <SafeAreaView
        style={{ flex: 1, backgroundColor: '#fff', ...style }}
        onLayout={() => {
          setDimensions()
        }}>
        <Pressable
          style={{
            flex: 1,
          }}
          onPress={() => Keyboard.dismiss()}>
          <>{children}</>
        </Pressable>
      </SafeAreaView>
    </>
  )
}

export default StandardContainer
