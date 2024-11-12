using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace Мем_генератор
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            Font = new System.Drawing.Font("Arial", 15, FontStyle.Bold);
        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {
          

        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {
           
        }

        private void button1_Click(object sender, EventArgs e)
        {
            String Text = String.Format("{0}", textBox2.Text);
            Brush Кисть = new SolidBrush(Color.Red);
            Graphics G = pictureBox1.CreateGraphics();
            G.TextRenderingHint = System.Drawing.Text.TextRenderingHint.AntiAlias;
            G.DrawString(Text, Font, Кисть, 150, 50); // Координаты размещения текста
        }

    }
}

