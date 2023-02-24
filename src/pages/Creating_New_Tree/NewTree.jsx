import React from 'react';
import { withStyles } from '@mui/styles';
import { Box, FormControl, MenuItem, Select, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../utils/Contants_Data/Route.Constants';
import JottedButton from '../../Components/Buttons/Jotted_Button/JottedButton';
import JottedHeader from '../../Components/Header/JottedHeader';
import styles from './newtree.flow.style';
import { Form, FormikProvider, getIn, useFormik } from 'formik';
import * as yup from 'yup';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

const NewTree = (props) => {
	const { classes } = props;
	const navigate = useNavigate();
	const userData = useSelector((state) => state?.userData?.user);

	const [universityAssociated, setUniversityAssociated] = React.useState(2);

	const menuProps = {
		classes: {
			list: classes.list,
			paper: classes.paper
		}
	};

	// drop down handler...
	const NewTreehandleChange = (event) => {
		event.target.value === 1 ? setUniversityAssociated(1) : setUniversityAssociated(0);
	};

	// back btn handler

	const newTreebackBtnHandler = () => {
		// needs to be redirected to the home ie. ROUTES.HOME
		navigate(ROUTES.HOME);
	};
	//next button..
	const newTreeNextButtonHandler = () => {
		navigate(ROUTES.DESCRIBE_TREE, { state: { user_id: userData?.id, name: values?.name, is_organization: universityAssociated } });
	};

	// formik validation...........

	const defaultValue = {
		name: ''
	};

	const validationSchema = yup.object().shape({
		name: yup.string().required('please enter Tree name')
	});

	const formik = useFormik({
		initialValues: defaultValue,
		validationSchema: validationSchema,
		onSubmit: async (values, { setSubmitting, resetForm }) => {
			// console.log('values: ', values);
		}
	});

	const { errors, values, touched, getFieldProps, setFieldError, setTouched, handleSubmit } = formik;

	// jsx code
	return (
		<Box className={classes.coverBox}>
			<JottedHeader onClick={newTreebackBtnHandler} />
			<Box className={classes.root}>
				<Box className={classes.ContainBox}>
					<p>
						Ready to plant the seeds for your <br /> new resource tree?
					</p>
					<Box className={classes.Boxpara2}>
						<p>An exciting journey awaits you!</p>
					</Box>

					<Box className={classes.InputBox}>
						<FormikProvider value={formik}>
							<Form className={classes.FormControl} onSubmit={handleSubmit}>
								<TextField
									fullWidth
									className={clsx(classes.textField, classes.textfieldError)}
									placeholder="Type Tree name"
									{...getFieldProps('name')}
									onKeyPress={() => {
										setFieldError({ ...errors, name: false });
										setTouched({ ...touched, name: false });
									}}
									error={Boolean(getIn(touched, `name`) && getIn(errors, `name`))}
									helperText={getIn(touched, `name`) && getIn(errors, `name`)}
								/>

								<FormControl fullWidth className={classes.selectDropdownItems}>
									<Select labelId="demo-simple-select-label" id="demo-simple-select" value={universityAssociated} onChange={NewTreehandleChange} MenuProps={menuProps}>
										<MenuItem value={2} className={classes.displayNone}>
											Is this tree associated with an institution or organization?
										</MenuItem>
										<MenuItem value={1}>YES</MenuItem>
										<MenuItem value={0}>NO</MenuItem>
									</Select>
								</FormControl>
							</Form>
						</FormikProvider>
					</Box>

					<JottedButton type="primary" onClick={newTreeNextButtonHandler} disabled={values.name && Object.keys(errors).length === 0 ? false : true}>
						Next
					</JottedButton>
				</Box>
			</Box>
		</Box>
	);
};

export default withStyles(styles)(NewTree);
