import React from 'react'
import {Box, Link, Octicon} from '@primer/react'
import {PencilIcon} from '@primer/octicons-react'
import Contributors from './contributors'

function PageFooter({editUrl, contributors = {}}) {
  const {logins = [], latestCommit} = contributors
  return editUrl || logins.length ? (
    <Box
      sx={{
        borderStyle: 'solid',
        borderColor: 'border.default',
        borderRadius: 2,
        borderWidth: 0,
        borderTopWidth: 1,
        mt: 8,
        py: 5,
      }}
    >
      <Box sx={{display: 'grid', gap: 4}}>
        {editUrl ? (
          <Link href={editUrl}>
            <Octicon icon={PencilIcon} sx={{mr: 2}} />
            Edit this page on GitHub
          </Link>
        ) : null}
        {logins.length ? <Contributors logins={logins} latestCommit={latestCommit} /> : null}
      </Box>
    </Box>
  ) : null
}

export default PageFooter