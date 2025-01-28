import { ArrowRightIcon } from '@sanity/icons'
import { Box, Flex, Text } from '@sanity/ui'
import { useCallback, useMemo } from 'react'
import {
  FieldMember,
  MemberField,
  ObjectInputProps,
  RenderFieldCallback,
} from 'sanity'

export function RangeInput(props: ObjectInputProps) {
  const { members, renderInput, renderItem, renderPreview } = props

  const fieldMembers = useMemo(
    () => members.filter((mem) => mem.kind === 'field') as FieldMember[],
    [members],
  )

  const min = fieldMembers.find((mem) => mem.name === 'min')
  const max = fieldMembers.find((mem) => mem.name === 'max')

  const renderField: RenderFieldCallback = useCallback(
    (props) => props.children,
    [],
  )

  const renderProps = useMemo(
    () => ({ renderField, renderInput, renderItem, renderPreview }),
    [renderField, renderInput, renderItem, renderPreview],
  )

  return (
    <Flex align="center" gap={3}>
      <Box flex={1}>{min && <MemberField {...renderProps} member={min} />}</Box>
      <Box>
        <Text muted>
          <ArrowRightIcon />
        </Text>
      </Box>
      <Box flex={1}>{max && <MemberField {...renderProps} member={max} />}</Box>
    </Flex>
  )
}
