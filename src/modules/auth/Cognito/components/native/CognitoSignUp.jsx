import React, { useRef } from 'react'
import { useState } from '@hookstate/core'
import { Pressable, Text, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { Button, InputField } from '../../../components'
import { COLORS, FONTS, icons, SIZES } from '../../../constants'
import { ShowToast, useIsFocused } from '../../../utils'
import { ParticipantAuth } from '../../../helpers'

const CognitoSignUp = ({ authMode }) => {
  const input = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    code: '',
  })

  const isConfirming = useState(false)
  const isFocused = useIsFocused()
  const loading = useState(false)
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const passRef = useRef(null)
  const confirmRef = useRef(null)
  const verificationRef = useRef(null)

  const handleSignUp = async () => {
    loading.set(true)
    const status = await ParticipantAuth.signUp(input)
    if (status) {
      isConfirming.set(true)
    }
    isFocused() && loading.set(false)
  }

  const handleConfirmSignUp = async () => {
    loading.set(true)
    const status = await ParticipantAuth.confirmSignUp(input)

    if (status === 'SUCCESS') {
      if (input.get().password) {
        ShowToast.success('Bekræftet! Du logges nu ind.')

        await ParticipantAuth.login(input)
      } else {
        authMode.merge({
          signUp: false,
        })
        ShowToast.success('Din mail er nu bekræftet.')
      }
    }
    isFocused() && loading.set(false)
  }

  const renderSignUpForm = () => (
    <View>
      <InputField
        placeholder='Brugernavn'
        icon={icons.account}
        value={input.get().username}
        textContentType='username'
        onChangeText={(value) => input.merge({ username: value })}
        returnKeyType='next'
        onSubmitEditing={() => nameRef.current.focus()}
      />
      <InputField
        placeholder='Fulde navn'
        iconEl={<AntDesign size={26} name='idcard' color={COLORS.primary} />}
        value={input.get().name}
        textContentType='name'
        onChangeText={(value) => input.merge({ name: value })}
        ref={nameRef}
        returnKeyType='next'
        onSubmitEditing={() => emailRef.current.focus()}
      />

      <InputField
        placeholder='Email'
        iconEl={<AntDesign size={26} name='mail' color={COLORS.primary} />}
        value={input.get().email}
        textContentType='emailAddress'
        onChangeText={(value) => input.merge({ email: value })}
        ref={emailRef}
        returnKeyType='next'
        onSubmitEditing={() => passRef.current.focus()}
      />
      <InputField
        placeholder='Adgangskode'
        iconEl={<AntDesign size={30} name='lock1' color={COLORS.primary} />}
        secureTextEntry
        value={input.get().password}
        textContentType='newPassword'
        onChangeText={(value) => input.merge({ password: value })}
        ref={passRef}
        returnKeyType='next'
        onSubmitEditing={() => confirmRef.current.focus()}
      />

      <InputField
        placeholder='Gentag adgangskode'
        iconEl={<AntDesign size={30} name='lock1' color={COLORS.primary} />}
        secureTextEntry
        value={input.get().confirmPassword}
        textContentType='newPassword'
        onChangeText={(value) => input.merge({ confirmPassword: value })}
        ref={confirmRef}
        returnKeyType='send'
        onSubmitEditing={handleSignUp}
      />

      <Button
        text='Opret'
        loading={loading.get()}
        mode='primary'
        onPress={handleSignUp}
        style={{
          marginVertical: SIZES.padding,
          paddingVertical: SIZES.padding,
          width: '100%',
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 6,
        }}
      >
        <Text
          style={{
            ...FONTS.body5,
            color: COLORS.dark,
          }}
        >
          Mangler at bekræfte?
        </Text>
        <TouchableOpacity onPress={() => isConfirming.set(true)}>
          <Text style={{ ...FONTS.h5, color: COLORS.primary }}>
            Bekræft her
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  const renderConfirmSignUpForm = () => (
    <>
      <InputField
        placeholder='Brugernavn'
        icon={icons.account}
        value={input.get().username}
        textContentType='username'
        onChangeText={(value) => input.merge({ username: value })}
        returnKeyType='next'
        onSubmitEditing={() => verificationRef.current.focus()}
      />
      <InputField
        placeholder='Bekræftelseskode'
        iconEl={<AntDesign size={26} name='key' color={COLORS.primary} />}
        secureTextEntry
        value={input.get().code}
        textContentType='oneTimeCode'
        onChangeText={(value) => input.merge({ code: value })}
        ref={verificationRef}
        returnKeyType='send'
        onSubmitEditing={handleConfirmSignUp}
      />
      <Button
        text='Bekræft min mail'
        loading={loading.get()}
        mode='primary'
        onPress={handleConfirmSignUp}
        style={{
          marginVertical: SIZES.padding,
          paddingVertical: SIZES.padding,
          minWidth: '100%',
        }}
      />
      <View style={{ flexDirection: 'row', paddingHorizontal: 6 }}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => isConfirming.set(false)}
        >
          <Text
            style={{
              ...FONTS.h5,
              color: COLORS.primary,
              // marginRight: SIZES.padding * 5,
            }}
          >
            Tilbage
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => ParticipantAuth.resendSignUp(input)}
        >
          <Text
            style={{ ...FONTS.h5, color: COLORS.primary, textAlign: 'right' }}
          >
            Send en ny kode
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )

  const renderScreen = () => (
    <View
      behavior='position'
      style={{
        backgroundColor: COLORS.white,
        alignItems: 'center',
        maxWidth: 500,
      }}
    >
      <Pressable
        style={{
          width: '100%',
          paddingHorizontal: SIZES.padding * 3,
        }}
      >
        {isConfirming.get() ? renderConfirmSignUpForm() : renderSignUpForm()}
      </Pressable>

      <Button
        mode='secondary'
        text='Log ind'
        style={{
          marginVertical: SIZES.padding * 2,
          backgroundColor: COLORS.white,
        }}
        textStyle={{ ...FONTS.h4 }}
        onPress={() => authMode.merge({ signUp: false })}
      />
    </View>
  )

  return renderScreen()
}

export default CognitoSignUp
