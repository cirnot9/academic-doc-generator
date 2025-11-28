import React, { forwardRef } from 'react';

const EmploymentLetterTemplate = forwardRef(({ data }, ref) => {
  return (
    <div 
      ref={ref} 
      style={{
        width: '800px',
        minHeight: '1000px',
        backgroundColor: 'white',
        padding: '60px 80px',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
        color: '#333',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Letterhead */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        marginBottom: '40px',
        paddingBottom: '20px',
        borderBottom: '3px solid #dc2626'
      }}>
        {data.universityLogo && (
          <div style={{ marginRight: '30px' }}>
            <img src={data.universityLogo} alt="Logo" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
          </div>
        )}
        <div>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#1f2937', marginBottom: '5px' }}>
            {data.universityName}
          </div>
          <div style={{ fontSize: '16px', color: '#6b7280', marginBottom: '5px' }}>
            Human Resources Department
          </div>
          <div style={{ fontSize: '14px', color: '#6b7280' }}>
            {data.universityAddress}
          </div>
        </div>
      </div>

      {/* Date */}
      <div style={{ textAlign: 'right', marginBottom: '40px', fontSize: '16px' }}>
        {new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}
      </div>

      {/* Subject */}
      <div style={{ marginBottom: '30px' }}>
        <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
          SUBJECT: Employment Verification Letter
        </div>
      </div>

      {/* Salutation */}
      <div style={{ marginBottom: '30px', fontSize: '16px' }}>
        To Whom It May Concern,
      </div>

      {/* Body */}
      <div style={{ flex: 1, fontSize: '16px', lineHeight: 1.6 }}>
        <div style={{ marginBottom: '25px' }}>
          This letter serves to verify the employment of <strong>{data.teacherFullName}</strong> 
          with {data.universityName}. The following information pertains to their current employment status:
        </div>

        <div style={{ marginBottom: '30px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ padding: '8px 0', fontWeight: 'bold', width: '40%' }}>Full Name:</td>
                <td style={{ padding: '8px 0' }}>{data.teacherFullName}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', fontWeight: 'bold' }}>Employee ID:</td>
                <td style={{ padding: '8px 0' }}>{data.employeeID}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', fontWeight: 'bold' }}>Department:</td>
                <td style={{ padding: '8px 0' }}>{data.department}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', fontWeight: 'bold' }}>College:</td>
                <td style={{ padding: '8px 0' }}>{data.college}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', fontWeight: 'bold' }}>Position:</td>
                <td style={{ padding: '8px 0' }}>{data.position}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', fontWeight: 'bold' }}>Employment Status:</td>
                <td style={{ padding: '8px 0' }}>Full-time Faculty Member</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', fontWeight: 'bold' }}>Date of Hire:</td>
                <td style={{ padding: '8px 0' }}>{data.hireDate}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', fontWeight: 'bold' }}>Annual Salary:</td>
                <td style={{ padding: '8px 0' }}>{data.salaryFormatted}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <strong>Teaching Responsibilities:</strong>
        </div>

        <div style={{ marginBottom: '25px', paddingLeft: '20px' }}>
          {data.teacherFullName} is responsible for teaching courses in {data.department}, including but not limited to:
          <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
            {data.subjects && data.subjects.map((subject, index) => (
              <li key={index} style={{ marginBottom: '5px' }}>{subject}</li>
            ))}
          </ul>
        </div>

        <div style={{ marginBottom: '25px' }}>
          {data.teacherFullName} has been a valued member of our faculty and has consistently 
          demonstrated professionalism, dedication, and excellence in teaching and research. 
          They are currently employed in good standing with no disciplinary actions on record.
        </div>

        <div style={{ marginBottom: '30px' }}>
          This letter is issued at the request of the employee and is valid as of the date mentioned above. 
          Should you require any additional information, please feel free to contact our Human Resources 
          Department at (555) 123-4500.
        </div>
      </div>

      {/* Closing */}
      <div style={{ marginBottom: '60px', fontSize: '16px' }}>
        <div style={{ marginBottom: '10px' }}>Sincerely,</div>
      </div>

      {/* Signature */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'flex-start',
        marginBottom: '30px'
      }}>
        <div>
          <div style={{ 
            borderBottom: '2px solid #333', 
            width: '250px', 
            marginBottom: '10px',
            height: '40px'
          }} />
          <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
            {data.officials?.hr || 'HR Director'}
          </div>
          <div style={{ fontSize: '14px', color: '#6b7280' }}>
            Director, Human Resources
          </div>
          <div style={{ fontSize: '14px', color: '#6b7280' }}>
            {data.universityName}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ 
        borderTop: '1px solid #e5e7eb',
        paddingTop: '20px',
        fontSize: '12px',
        color: '#6b7280',
        textAlign: 'center'
      }}>
        This document is computer generated and does not require a signature if issued electronically.
        <br />
        For verification purposes, please contact HR at hr@{data.universityName?.toLowerCase().replace(/\s+/g, '')}.edu
      </div>
    </div>
  );
});

export default EmploymentLetterTemplate;
