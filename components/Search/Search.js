import React, { useEffect, useRef, useState } from "react";
import style from "../Search/style";
import { Pressable, TextInput } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import PropTypes from 'prop-types'


const Search = (props) => { 

    const textInputRef = useRef(null)
    const [search, setSearch] = useState('');

    // useEffect(() => {
    //   console.log(search)
    
    //   return () => { 
        
    //   }
    // }, [])
    
    

    const handleFocus = () => {
        textInputRef.current.focus()
    }

    const handleSearch = (searchValue) => { 
        setSearch(searchValue);
        props.onSearch(searchValue);
    }

    return (
        <Pressable style={style.searchInputContainer} onPress={() => handleFocus()} >
            <FontAwesome name={'search'} size={24} color={'#25C0FF'} />
            <TextInput 
            ref={textInputRef} 
            style={style.searchInput}
            value={search}
            onChangeText={(val) => handleSearch(val)}
            />
        </Pressable>
    )
}

Search.defaultProps = { 
    onSearch: () => {}
}

Search.propTypes = { 
    onSearch : PropTypes.func
}
export default Search;
