import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Leaf, Target, Users, GraduationCap, ArrowRight, Globe, Workflow } from 'lucide-react';
import ApplicationFlowGraph from '../components/About/ApplicationFlowGraph';

const teamMembers = [
  { name: 'Felipe Carillo', role: 'Desenvolvedor Frontend' },
  { name: 'Membro 2', role: 'Desenvolvedor Backend' },
  { name: 'Membro 3', role: 'Machine Learning' },
  { name: 'Membro 4', role: 'Dados e Pesquisa' },
];

function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      {/* Project Description */}
      <Box sx={{ mb: 6 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
          <Leaf size={28} color="#2D6A4F" />
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            Sobre o Ze Praga
          </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
          O Ze Praga e uma plataforma de diagnostico fitossanitario inteligente, desenvolvida
          como Trabalho de Conclusao de Curso (TCC) no Instituto Maua de Tecnologia. Atualmente,
          nosso foco esta na deteccao de doencas e pragas na soja, utilizando modelos de deep
          learning treinados com o dataset PlantVillage para identificar as principais doencas
          foliares, fornecendo diagnosticos rapidos e planos de acao personalizados.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
          Porem, nossa infraestrutura e solucao foram projetadas para expandir para diversos
          cultivos. O objetivo e democratizar o acesso a tecnologia de diagnostico fitossanitario,
          permitindo que qualquer produtor — independente do porte ou regiao — possa identificar
          problemas em suas lavouras de forma rapida, precisa e acessivel, contribuindo para a
          seguranca alimentar e a agricultura sustentavel.
        </Typography>
      </Box>

      {/* Motivation */}
      <Box sx={{ mb: 6 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
          <Target size={22} color="#2D6A4F" />
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Motivacao
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {[
            {
              title: 'Problema',
              text: 'A identificacao de doencas e pragas depende de conhecimento tecnico especializado, nem sempre acessivel para pequenos e medios produtores em todo o Brasil.',
            },
            {
              title: 'Solucao',
              text: 'Uma plataforma simples e expansivel: hoje focada na soja, mas com infraestrutura pronta para abranger diversos cultivos — levando tecnologia ao campo.',
            },
            {
              title: 'Impacto',
              text: 'Democratizacao do acesso a diagnostico fitossanitario, reducao de perdas e uso mais eficiente de insumos para produtores de qualquer porte.',
            },
          ].map((item) => (
            <Grid size={{ xs: 12, md: 4 }} key={item.title}>
              <Card sx={{ p: 3, height: '100%' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: 'primary.main' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {item.text}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Application Flow */}
      <Box sx={{ mb: 6 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
          <Workflow size={22} color="#2D6A4F" />
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Como o Ze Praga Funciona
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, mb: 3 }}>
          O fluxo abaixo mostra como a tecnologia chega ate qualquer produtor rural de forma simples e acessivel.
          Da foto da folha ao diagnostico com plano de acao — tudo em segundos, sem necessidade de
          conhecimento tecnico especializado. Hoje para soja, amanha para qualquer cultivo.
        </Typography>
        <ApplicationFlowGraph />
      </Box>

      {/* Team */}
      <Box sx={{ mb: 6 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
          <Users size={22} color="#2D6A4F" />
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Equipe
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {teamMembers.map((member) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={member.name}>
              <Card sx={{ p: 3, textAlign: 'center' }}>
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(45, 106, 79, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'primary.main',
                  }}
                >
                  {member.name.charAt(0)}
                </Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  {member.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {member.role}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Institution */}
      <Box sx={{ mb: 6 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
          <GraduationCap size={22} color="#2D6A4F" />
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Instituicao
          </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 2 }}>
          Este projeto foi desenvolvido no Instituto Maua de Tecnologia (IMT),
          como parte do curso de Ciencia da Computacao, sob orientacao academica.
        </Typography>
      </Box>

      {/* ODS */}
      <Box sx={{ mb: 6 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
          <Globe size={22} color="#2D6A4F" />
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Objetivos de Desenvolvimento Sustentavel
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
          O Ze Praga esta alinhado com os Objetivos de Desenvolvimento Sustentavel da ONU:
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Card sx={{ p: 2.5, flex: '1 1 200px' }}>
            <Chip label="ODS 2" size="small" sx={{ mb: 1, backgroundColor: '#DDA63A', color: '#FFF', fontWeight: 700 }} />
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
              Fome Zero e Agricultura Sustentavel
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Contribui para a seguranca alimentar ao ajudar produtores a proteger suas lavouras.
            </Typography>
          </Card>
          <Card sx={{ p: 2.5, flex: '1 1 200px' }}>
            <Chip label="ODS 9" size="small" sx={{ mb: 1, backgroundColor: '#FD6925', color: '#FFF', fontWeight: 700 }} />
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
              Industria, Inovacao e Infraestrutura
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Utiliza inteligencia artificial e inovacao tecnologica aplicada ao agronegocio.
            </Typography>
          </Card>
        </Box>
      </Box>

      {/* CTA */}
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          Experimente o Ze Praga
        </Typography>
        <Button
          component={Link}
          to="/chat"
          variant="contained"
          color="primary"
          size="large"
          endIcon={<ArrowRight size={20} />}
          sx={{ px: 5, py: 1.5 }}
        >
          Iniciar Diagnostico
        </Button>
      </Box>
    </Container>
  );
}

export default AboutPage;
