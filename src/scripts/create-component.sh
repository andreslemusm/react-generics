#! /bin/bash

COMPONENT_NAME=$1
NEW_LINE=$'\n'

if [[ $COMPONENT_NAME == "" ]];
  then
    echo "Error: you did not pass a component name"
  else
    echo "type ${COMPONENT_NAME}Props = {};${NEW_LINE}" > $COMPONENT_NAME.tsx
    echo "export const ${COMPONENT_NAME} = ({}: ${COMPONENT_NAME}Props): React.ReactElement => {" >> $COMPONENT_NAME.tsx
    echo "  return ();" >> $COMPONENT_NAME.tsx
    echo "};" >> $COMPONENT_NAME.tsx
fi
