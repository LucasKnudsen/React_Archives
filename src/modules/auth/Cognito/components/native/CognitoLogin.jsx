import React, { useRef } from 'react'
import { useState } from '@hookstate/core'
import {
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { Button, InputField } from '../../../components'
import { COLORS, FONTS, icons, SIZES } from '../../../constants'
import { useIsFocused } from '../../../utils'
import CognitoResetCode from './CognitoResetCode'
import { ParticipantAuth } from '../../../helpers'

const CognitoLogin = ({ authMode }) => {
  const isResetCode = useState(false)

  const input = useState({ username: '', password: '' })
  const loading = useState(false)
  const isFocused = useIsFocused()
  const passRef = useRef(null)

  const handleLogin = async () => {
    loading.set(true)
    await ParticipantAuth.login(input)
    isFocused() && loading.set(false)
  }

  const renderLoginForm = () => {
    return (
      <>
        <InputField
          placeholder='Brugernavn eller email'
          icon={icons.account}
          value={input.get().username}
          textContentType='username'
          onChangeText={(value) => input.merge({ username: value })}
          returnKeyType='next'
          onSubmitEditing={() => passRef.current.focus()}
        />
        <InputField
          ref={passRef}
          placeholder='Adgangskode'
          iconEl={<AntDesign size={30} name='lock' color={COLORS.primary} />}
          secureTextEntry
          value={input.get().password}
          textContentType='newPassword'
          onChangeText={(value) => input.merge({ password: value })}
          returnKeyType='go'
          onSubmitEditing={handleLogin}
        />
        <Button
          text='Log ind'
          loading={loading.get()}
          mode='primary'
          onPress={handleLogin}
          style={{
            marginVertical: SIZES.padding,
            paddingVertical: SIZES.padding,
            width: '100%',
          }}
        />

        <View style={{ flexDirection: 'row', paddingHorizontal: 6 }}>
          <Text
            style={{
              ...FONTS.body5,
              color: COLORS.dark,
              flex: 1,
            }}
          >
            Glemt din kode?
          </Text>
          <TouchableOpacity onPress={() => isResetCode.set(true)}>
            <Text
              style={{
                ...FONTS.h5,
                color: COLORS.primary,
              }}
            >
              Gendan her
            </Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }

  return (
    <KeyboardAvoidingView
      behavior='position'
      contentContainerStyle={{
        alignItems: 'center',
        maxWidth: 500,
      }}
    >
      <View
        style={{
          paddingHorizontal: SIZES.padding * 3,
          width: '100%',
        }}
      >
        {isResetCode.get() ? (
          <CognitoResetCode isResetCode={isResetCode} />
        ) : (
          renderLoginForm()
        )}
      </View>

      <Button
        mode='secondary'
        text='Opret en bruger'
        style={{
          marginVertical: SIZES.padding * 2,
          backgroundColor: COLORS.white,
        }}
        textStyle={{ ...FONTS.h4 }}
        onPress={() => authMode.merge({ signUp: true })}
      />
    </KeyboardAvoidingView>
  )
}

export default CognitoLogin
