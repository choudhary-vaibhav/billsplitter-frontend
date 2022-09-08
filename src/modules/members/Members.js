import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Skeleton from '@mui/material/Skeleton';
import { Container } from "@mui/system";
import { useEffect, useState, useRef } from "react";
import { API_CLIENT } from '../../shared/services/api-client';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export const Members = ({group_name}) => {

	const [members, setMembers] = useState('');
	const [loading, setLoading] = useState(true);
	const newMember = useRef('');

	useEffect(()=>{
		getMembers();
	})


  	const getMembers = async () => {
		try{
			const URL = process.env.REACT_APP_LEDGER_URL + group_name + '/member';
			//console.log(URL);
			const result = await API_CLIENT.post(URL);
			if(result){
				setMembers(result.data.members); 
				setLoading(false);
				//console.log(members);
			}

		}catch(err){
			console.log('Error in Member Call ', err);
		}
	}

	const addMember = async () => {

		if(newMember.current.value){
			const new_member = newMember.current.value;

			const memberObject = {'new_member':new_member};
			newMember.current.value = '';

			try{
				const URL = process.env.REACT_APP_LEDGER_URL + group_name + '/update';

				const result = await API_CLIENT.post(URL, memberObject);
				if(result && result.data.message){
					console.log(result.data.message);
					//getMembers();
					window.location.reload();
				}
			}catch(err){
				console.log('Error in adding transaction ', err);
			}
		}
		
		
	}

	const cardWidth = {
        width: '100vw',
        '@media (min-width: 720px)' : {
          width: '50vw'
        },
		'@media (min-width: 600px && max-width: 720px)' : {
			width: '75vw'
		  }
      }


  return (
    <>
      	{loading?
                <Box>
                    <br/>
                    <Skeleton />
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" />
                    <Skeleton animation={false} />
                    <br/>
                </Box>
            : <>
				<Container sx={{width: cardWidth, display:"flex"}}>
				<Box sx={{ width: "100vw", bgcolor: "#1C6DD0", borderRadius:"10px", color:"white" }}>
					<List>
						<ListItem key="heading">
                            <Typography sx={{fontWeight:"bold", m:1}} variant="h5">
                                Members
                            </Typography>
                        </ListItem>
					{	members.map(member => {
							return (
								<ListItem  key={member}>
									<ListItemIcon>
										<AccountCircleIcon />
									</ListItemIcon>
									<ListItemText primary={member} />
								</ListItem>
							)
						})
					}

						<ListItem
                            secondaryAction={
                                <IconButton onClick={addMember} edge="end" aria-label="add">
                                <PersonAddIcon />
                                </IconButton>
                            }
                        >
						<TextField required inputRef={newMember} id="standard-basic" label="New Member" variant="standard" />
						</ListItem>
					</List>
				</Box>
				</Container>
				<br/>
			</>
		}
    </>
  );
};
