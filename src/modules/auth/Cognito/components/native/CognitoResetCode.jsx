import { useState } from '@hookstate/core'
import React, { useRef } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { Button, InputField } from '../../../components'
import { COLORS, FONTS, icons, SIZES } from '../../../constants'
import { ParticipantAuth } from '../../../helpers'
import { useIsFocused } from '../../../utils'

const CognitoResetCode = ({ isResetCode }) => {
  const input = useState({
    username: '',
    password: '',
    code: '',
  })
  const loading = useState(false)
  const hasCode = useState(false)
  const passRef = useRef(null)
  const confirmRef = useRef(null)
  const isFocused = useIsFocused()

  const handleSendCode = async () => {
    loading.set(true)

    const response = await ParticipantAuth.sendPasswordResetCode(input)
    response && hasCode.set(true)
    isFocused && loading.set(false)
  }

  const handleResetPassword = async () => {
    loading.set(true)
    const response = await ParticipantAuth.resetPassword(input)
    response && isResetCode.set(false)
    isFocused && loading.set(false)
  }

  return (
    <>
      <InputField
        placeholder='Brugernavn'
        icon={icons.account}
        value={input.get().username}
        textContentType='username'
        onChangeText={(value) => input.merge({ username: value })}
        returnKeyType={hasCode.get() ? 'next' : 'send'}
        onSubmitEditing={() =>
          hasCode.get() ? passRef?.current?.focus() : handleSendCode()
        }
      />
      {hasCode.get() ? (
        <>
          <InputField
            placeholder='Ny adgangskode'
            iconEl={<AntDesign size={30} name='lock' color={COLORS.primary} />}
            secureTextEntry
            ref={passRef}
            value={input.get().password}
            textContentType='newPassword'
            onChangeText={(value) => input.merge({ password: value })}
            returnKeyType='next'
            onSubmitEditing={() => confirmRef.current.focus()}
          />
          <InputField
            placeholder='Bekræftelseskode'
            iconEl={<AntDesign size={26} name='key' color={COLORS.primary} />}
            secureTextEntry
            ref={confirmRef}
            value={input.get().code}
            textContentType='oneTimeCode'
            onChangeText={(value) => input.merge({ code: value })}
            returnKeyType='done'
            onSubmitEditing={handleResetPassword}
          />

          <Button
            text={'Skift kode'}
            loading={loading.get()}
            mode='primary'
            onPress={handleResetPassword}
            style={{
              marginVertical: SIZES.padding,
              paddingVertical: SIZES.padding,
              width: '100%',
            }}
          />
        </>
      ) : (
        <Button
          text={'Få bekræftelseskoden tilsendt'}
          loading={loading.get()}
          mode='primary'
          onPress={handleSendCode}
          style={{
            marginVertical: SIZES.padding,
            paddingVertical: SIZES.padding,
            width: '100%',
          }}
        />
      )}

      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 6,
          justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity onPress={() => isResetCode.set(false)}>
          <Text
            style={{
              ...FONTS.h5,
              flex: 1,
              color: COLORS.primary,
            }}
          >
            Tilbage
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            hasCode.set(!hasCode.get())
          }}
        >
          <Text
            style={{
              ...FONTS.h5,
              color: COLORS.primary,
            }}
          >
            {hasCode.get() ? 'Send en ny kode' : 'Har allerede en kode'}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default CognitoResetCode
