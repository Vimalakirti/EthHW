array=( 1_Hello 2_Coin 3_TodoApp )
for i in "${array[@]}"
do
    mv "${i}"/truffle-config.js "${i}"/truffle.js
    # rename back:
    # mv "${i}"/truffle.js "${i}"/truffle-config.js
done
